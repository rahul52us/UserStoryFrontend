import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { action, makeObservable, observable } from "mobx";
import CryptoJS from "crypto-js";

interface Notification {
  title?: any;
  message: string;
  type?: any;
  placement?: string;
  action?: any;
}

class AuthStore {
  loading: boolean = false;
  user: any | null = null;
  openSearch: any = false;
  notification: Notification | null = null;
  isRememberCredential = true;
  companyUsers = [];

  constructor() {
    this.initiatAppOptions();
    makeObservable(this, {
      user: observable,
      notification: observable,
      companyUsers: observable,
      openSearch: observable,
      login: action,
      register: action,
      doLogout: action,
      closeSearchBar: action,
      openNotification: action,
      closeNotication: action,
      checkPermission: action,
      updateUserProfile: action,
      uploadUserPic: action,
      sendNotification: action,
      restoreUser: action,
      forgotPasswordStore: action,
      changePasswordStore: action,
      resetPasswordStore: action,
      verifyEmail: action,
      createOrganisation: action,
      getCompanyUsers: action,
    });
  }

  setAppAxiosDefaults = async () => {
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
  };

  initiatAppOptions = () => {
    this.loading = true;
    this.setAppAxiosDefaults();
    const authorization_token = process.env.REACT_APP_AUTHORIZATION_TOKEN;
    if (authorization_token) {
      const token: string | null = localStorage.getItem(authorization_token);
      if (token && token !== "undefined") {
        const headers: AxiosRequestConfig["headers"] = {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        };
        Object.assign(axios.defaults.headers, headers);
        this.setUserOptions();
      } else {
        this.loading = false;
        this.user = null;
        this.clearLocalStorage();
      }
    } else {
      this.loading = false;
      this.user = null;
      this.clearLocalStorage();
    }
  };

  setUserOptions = () => {
    axios
      .post("/auth/me")
      .then(({ data }: AxiosResponse<{ data: any }>) => {
        this.user = data.data;
      })
      .catch(() => {
        this.loading = false;
        this.clearLocalStorage();
        this.initiatAppOptions();
      });
  };

  clearLocalStorage = () => {
    localStorage.removeItem(
      process.env.REACT_APP_AUTHORIZATION_TOKEN as string
    );
    localStorage.removeItem("quizUserData");
  };

  updateUserProfile = async (sendData: any) => {
    try {
      const { data } = await axios.put("/auth/update-profile", sendData);
      this.user = data.data;
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  login = async (sendData: {
    remember_me: boolean;
    username: string;
    password: string;
  }) => {
    try {
      this.isRememberCredential = sendData.remember_me;
      const { data } = await axios.post<{ data: any }>("/auth/login", {
        username: sendData.username,
        password: sendData.password,
      });
      this.user = data.data;
      localStorage.setItem(
        "quizUserData",
        CryptoJS.AES.encrypt(
          JSON.stringify(this.user),
          process.env.REACT_APP_ENCRYPT_SECRET_KEY!
        ).toString()
      );
      const headersToUpdate = {
        Accept: "application/json",
        Authorization: `Bearer ${data.data.authorization_token}`,
      };
      axios.defaults.headers = Object.assign(
        {},
        axios.defaults.headers,
        headersToUpdate
      );
      localStorage.setItem(
        process.env.REACT_APP_AUTHORIZATION_TOKEN as string,
        data.data.authorization_token
      );
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    }
  };

  createOrganisation = async (value: any) => {
    try {
      const { remember_me, token, first_name, last_name, ...sendData } = value;
      sendData["name"] = `${first_name} ${last_name}`;
      const { data } = await axios.post(
        `/organisation/create/${token}`,
        sendData
      );
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    }
  };

  restoreUser = () => {
    try {
      const authorization_token = process.env.REACT_APP_AUTHORIZATION_TOKEN;
      if (authorization_token) {
        const storedData = localStorage.getItem("quizUserData");
        if (storedData) {
          const decryptedBytes = CryptoJS.AES.decrypt(
            storedData,
            process.env.REACT_APP_ENCRYPT_SECRET_KEY!
          );
          const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
          this.user = JSON.parse(decryptedData);
          return true;
        } else {
          this.doLogout();
          return false;
        }
      } else {
        this.doLogout();
        return false;
      }
    } catch (err) {
      this.user = null;
      this.doLogout();
    }
  };

  doLogout = () => {
    this.user = null;
    this.clearLocalStorage();
  };

  register = () => {
    console.log(this.user);
  };

  forgotPasswordStore = async (value: any) => {
    try {
      const { data } = await axios.post("/auth/forgot-password", value);
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
    }
  };

  resetPasswordStore = async (value: any) => {
    try {
      const { data } = await axios.post("/auth/reset-password", value);
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    }
  };

  changePasswordStore = async (value: any) => {
    try {
      const { data } = await axios.post("/auth/change-password", {
        oldPassword: value.oldPassword,
        newPassword: value.newPassword,
      });
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    }
  };

  verifyEmail = async (value: string) => {
    try {
      const { data } = await axios.get(`/auth/verify-email/${value}`);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err.message);
    }
  };

  openNotification = (data: {
    title: any;
    message: string;
    type?: string;
    placement?: string;
    action?: any;
  }) => {
    this.notification = {
      title: data.title,
      message: data.message,
      type: data.type ? data.type : "success",
      placement: data.placement ? data.placement : "bottom",
      action: data.action ? data.action : null,
    };
  };

  closeNotication = () => {
    this.notification = null;
  };

  checkPermission = (check: { key: string; value: string }) => {
    if (this.user?.adminType === "admin") {
      return true;
    } else {
      if (this.user?.permission) {
        var status = false;
        Object.entries(this.user.permission).forEach((item: any) => {
          if (item[0] === check?.key) {
            if (item[1][check.value]) {
              status = true;
            } else {
              status = false;
            }
          }
        });
        return status;
      }
    }
  };

  uploadUserPic = async (sendData: any) => {
    try {
      const { data } = await axios.post("/auth/upload-pic", sendData);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  sendNotification = async (sendData: any) => {
    try {
      const { data } = await axios.post("/notification/create", sendData);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  getCompanyUsers = async ({ page }: any) => {
    try {
      const { data } = await axios(`auth/get/users?page=${page}`);
      this.companyUsers = data.data;
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  closeSearchBar = async () => {
    if (this.openSearch) {
      this.openSearch = false;
    } else {
      this.openSearch = true;
    }
  };
}

export default AuthStore;
