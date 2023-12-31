import { useState } from "react";
import { observer } from "mobx-react-lite";
import ClassBanner from "./component/ClassBanner";
import CustomDrawer from "../../../config/component/Drawer/CustomDrawer";
import ClassForm from "./component/ClassForm/ClassForm";
import ClassTable from "./component/ClassTable/ClassTable";
import { Box } from "@chakra-ui/react";

const ClassIndex = observer(() => {
  const [classForm, setClassForm] = useState({
    open: false,
    type: "create",
    data: null,
  });

  return (
    <>
      <ClassBanner createClass={setClassForm} />
      <Box mt={3}>
        <ClassTable tableForm={setClassForm} />
      </Box>
      {/* OPEN THE DRAWER FOR THE CLASS FORM */}
      <CustomDrawer
        title="CREATE NEW CLASS"
        open={classForm.open}
        close={() => {
          setClassForm({ open: false, type: "create", data: null });
        }}
      >
        <ClassForm formData={classForm} />
      </CustomDrawer>
    </>
  );
});

export default ClassIndex;
