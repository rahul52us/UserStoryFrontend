import { observer } from "mobx-react-lite";
import CustomInput from "../../CustomInput/CustomInput";
import DashFormModel from "../DashFormModel/DashFormModel";
import store from "../../../../store/store";

const DashSearchBar = observer(() => {
  const {auth : {openSearch, closeSearchBar}} = store
  return (
      <DashFormModel open={openSearch} isCentered={false } close={closeSearchBar}>
      <CustomInput placeholder="Search here" name="search" />
      </DashFormModel>
  );
});
export default DashSearchBar;