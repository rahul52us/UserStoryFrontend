import axios from "axios";
import { makeObservable, observable, action } from "mobx";

class TestimonialStore {
  testimonialLayout = "table";
  testimonials = {
    data: [],
    currentPage: 1,
    hasMore: false,
    loading: true,
    hasFetch: false,
  };

  openTestimonialDrawer = {
    open: false,
  };

  constructor() {
    makeObservable(this, {
      testimonials: observable,
      openTestimonialDrawer: observable,
      getTestimonials: action,
      deleteTestimonial: action,
      createTestimonial: action,
      editTestimonial: action,
      downloadTestimonialList: action,
      setOpenTestimonialDrawer: action,
      testimonialLayout: observable,
	  setTestimonialLayout:action
    });
  }

  getTestimonials = action(async (sendData) => {
    this.testimonials.loading = true;
    try {
      const { data } = await axios.get(
        `/testimonial/get?page=${sendData.page}&limit=10`
      );
      this.testimonials.data = [...this.testimonials.data, ...data.data];
      this.testimonials.hasMore = data.data.length > 0 ? true : false;
      this.testimonials.hasFetch = true;
    } catch (err) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.testimonials.loading = false;
    }
  });

  deleteTestimonial = async (sendData) => {
    try {
      const { data } = await axios.delete(`/testimonial/delete/${sendData.id}`);
      this.testimonials.data = this.testimonials.data.filter(
        (item) => item.id !== sendData.id
      );
      return data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  createTestimonial = async (sendData) => {
    try {
      const { data } = await axios.post(`/testimonial/create`, sendData);
      this.testimonials.data.unshift(data.data);
      return data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  editTestimonial = async (sendData, id) => {
    try {
      const { data } = await axios.put(`/testimonial/update`, sendData);
      const dd = this.testimonials.data.findIndex((item) => item.id === id);
      if (dd !== -1) {
        this.testimonials.data.splice(dd, 1, data.data);
      }
      return data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  downloadTestimonialList = async (sendData) => {
    try {
      const response = await axios.post(
        "/testimonial/download/list",
        sendData,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "testimonials.xlsx");
      document.body.appendChild(link);
      link.click();
      return {
        data: "Testimonial list download successfully",
      };
    } catch (err) {
      return Promise.reject(err);
    }
  };

  setOpenTestimonialDrawer = () => {
    this.openTestimonialDrawer.open = !this.openTestimonialDrawer.open;
  };

  setTestimonialLayout = () => {
    if (this.testimonialLayout === "table") {
      this.testimonialLayout = "grid";
    } else {
      this.testimonialLayout = "table";
    }
  };
}

export default TestimonialStore;
