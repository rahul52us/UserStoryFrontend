import axios from 'axios';
import { action, makeObservable, observable } from 'mobx';

class DashStore {
  userCounts = null;
  webCount = null

  constructor() {
    makeObservable(this, {
      userCounts: observable,
      GetUsersCount: action,
      webCount:observable,
      GetWebCount:action
    });
  }

  GetUsersCount = async () => {
    try
    {
    const {data} = await axios.get('/auth/get-users-count')
    this.userCounts = data.data
    return this.userCounts
    }
    catch(err)
    {
      return Promise.reject(err?.response?.data);
    }
  };

  GetWebCount = async () => {
    try
    {
    const {data} = await axios.get('/auth/get-web-count')
    this.webCount = data.data
    return this.userCounts
    }
    catch(err)
    {
      return Promise.reject(err?.response?.data);
    }
  }

}

export default DashStore;
