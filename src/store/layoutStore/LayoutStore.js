import { action, makeObservable, observable } from 'mobx';

class LayoutStore {
  selectMenu = localStorage.getItem('selected_menu') ? JSON.parse(localStorage.getItem('selected_menu')) : null
  themeMode = localStorage.getItem('theme_mode') === 'dark' ? 'dark' : 'light';
  headerSettingDrawer = localStorage.getItem('headerSettingDrawer') === 'true' ? true : false;
  fullScreenMode = localStorage.getItem('fullScreenMode') === 'true' ? true : false;
  MobileSidebar = localStorage.getItem('MobileSidebar') === 'true' ? true : false;
  SearchDialog = localStorage.getItem('SearchDialog') === 'true' ? true : false;
  showDashboardNote = localStorage.getItem('showDashboardNote') === 'true' ? true : false;
  openNotification = localStorage.getItem('OpenNotification') === 'true' ? true : false;
  constructor() {
    makeObservable(this, {
      selectMenu:observable,
      headerSettingDrawer: observable,
      fullScreenMode: observable,
      MobileSidebar: observable,
      SearchDialog: observable,
      showDashboardNote: observable,
      themeMode: observable,
      openNotification: observable,
      setSelectedMenu:action,
      setShowDashboardNode: action,
      headerSettingDrawerFun: action,
      fullScreenModeFun: action,
      MobileSidebarFun: action,
      SearchDialogFun: action,
      changeThemeMode: action,
      setOpenNotification: action,
      resetLayout: action,
    });
  }

  setSelectedMenu = (status) => {
    localStorage.setItem('selected_menu',JSON.stringify(status))
    this.selectMenu = status
  }

  headerSettingDrawerFun = (status) => {
    this.headerSettingDrawer = status;
    localStorage.setItem('headerSettingDrawer', status);
  };

  fullScreenModeFun = (status) => {
    this.fullScreenMode = status;
    localStorage.setItem('fullScreenMode', status);
  };

  MobileSidebarFun = (status) => {
    this.MobileSidebar = status;
    localStorage.setItem('MobileSidebar', status);
  };

  SearchDialogFun = (status) => {
    this.SearchDialog = status;
    localStorage.setItem('SearchDialog', status);
  };

  setShowDashboardNode = (status) => {
    this.showDashboardNote = status;
    localStorage.setItem('showDashboardNote', status);
  };

  changeThemeMode = (status) => {
    this.themeMode = status;
    localStorage.setItem('theme_mode', status);
  };

  setOpenNotification = (status) => {
    this.openNotification = status;
    localStorage.setItem('OpenNotification', status);
  };

  resetLayout = () => {
    localStorage.setItem('headerSettingDrawer', false);
    localStorage.setItem('fullScreenMode', false);
    localStorage.setItem('MobileSidebar', false);
    localStorage.setItem('SearchDialog', false);
    localStorage.setItem('showDashboardNote', false);
    localStorage.setItem('theme_mode', 'light');
    localStorage.setItem('OpenNotification', false);
  };
}

export default LayoutStore;
