import axios from 'axios';
import { makeObservable, observable, action } from 'mobx';

class WebStore {
  web = null;
  constructor() {
    makeObservable(this, {
      web: observable,
      getWeb: action,
    });
  }

  getWeb = async (webName) => {
    if (localStorage.getItem(process.env.REACT_APP_WEB_INFO_KEY)) {
      this.web = JSON.parse(localStorage.getItem(process.env.REACT_APP_WEB_INFO_KEY))
      return this.web
    } else {
      try {
        const { data } = await axios.get(`web/get/${webName}`);
        this.web = data.data;
        localStorage.setItem(process.env.REACT_APP_WEB_INFO_KEY,  JSON.stringify(data.data));
        return this.web;
      } catch (err) {
        localStorage.removeItem(process.env.REACT_APP_WEB_INFO_KEY)
        return Promise.reject(err?.response?.data);
      }
    }
  };
}

export default WebStore;
