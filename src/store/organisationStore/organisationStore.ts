import axios from "axios";
import { action, makeObservable } from "mobx";

class OrganisationStore {
  constructor() {
    makeObservable(this, {
      filterOrganisation: action,
      createOrganisationUser: action
    });
  }

  filterOrganisation = async (searchValue: string) => {
    try {
      const { data } = await axios.get(
        `/organisation/search?company=${searchValue}`
      );
      return data;
    } catch (err: any) {
      console.log(err)
      return Promise.reject(err?.response?.data || err);
    }
  };

  createOrganisationUser = async (value: any) => {
    try {
      const { data } = await axios.post("/auth/create", value);
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
    }
  }
}

export default OrganisationStore;
