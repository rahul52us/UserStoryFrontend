import { observer } from "mobx-react-lite";
import store from "../../../../store/store";
import CustomDrawer from "../../../../config/component/Drawer/CustomDrawer";
import StudentForm from "./component/StudentForm";
import { Button } from "@chakra-ui/react";
import StudentTable from "./component/StudentTable/StudentTable";

const StudentIndex = observer(() => {
  const {
    Student: {
      studentDrawerForm: { open },
      setHandleFormDrawer,
    },
  } = store;
  return (
    <div>
      <StudentTable tableForm={() => setHandleFormDrawer("create")}/>
      <Button onClick={() => setHandleFormDrawer("create")} display="none">CREATE</Button>
      <CustomDrawer open={open} close={() => setHandleFormDrawer("create")} title="Add Student">
        <StudentForm />
      </CustomDrawer>
    </div>
  );
});

export default StudentIndex;
