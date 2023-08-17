import axios from "axios";
import { action, makeObservable, observable } from "mobx";

class StudentStore {
  studentDetails : any = {
    data : null,
    loading:true,
    hasFetch:false
  }

  classes = {
    data: [],
    loading: false,
    hasFetch: false,
  };

  student = {
    data: [],
    loading: false,
    hasFetch: false,
  };

  studentDrawerForm = {
    type: "",
    open: false,
  };

  constructor() {
    makeObservable(this, {
      studentDrawerForm: observable,
      studentDetails:observable,
      classes: observable,
      student:observable,
      setHandleFormDrawer: action,
      createStudent: action,
      getStudentById:action,
      getStudents: action,
      updateStudent: action,
      createClass: action,
      updateClass: action
    });
  }

  createClass = async (sendData: any) => {
    try {
      const { data } = await axios.post("/class/create", sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  updateClass = async (sendData: any) => {
    try {
      const { data } = await axios.put(`/class/update/${sendData._id}`, sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  getStudents = async (sendData: any) => {
    try {
      this.student.loading = true
      const { data } = await axios.post("/student", sendData);
      console.log(data.data)
      this.student.data = data?.data?.students || [];
      return data.data
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.student.loading = false;
    }
  };

  setHandleFormDrawer = (type: string, data?: any) => {
    this.studentDrawerForm.open = this.studentDrawerForm.open ? false : true;
    this.studentDrawerForm.type = type;
    if (type === "edit") {
      console.log(data);
    } else {
    }
  };

  createStudent = async (sendData : any) => {
    try {
      const { data } = await axios.post("student/create", sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  }

  updateStudent = async (id : string , sendData : any) => {
    try {
      const { data } = await axios.post(`student/${id}`, sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  }


  getStudentById = async (sendData : any) => {
    try {
      const { data } = await axios.get(`student/${sendData._id}`);
      this.studentDetails.data = data.data
      this.studentDetails.hasFetch = true
      return data;
    } catch (err: any) {
      this.studentDetails.hasFetch = false
      return Promise.reject(err?.response?.data || err);
    }finally{
      this.studentDetails.loading = false
    }
  }
}

export default StudentStore;
