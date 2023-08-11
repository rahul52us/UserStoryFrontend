import { observer } from "mobx-react-lite";
import store from "../../../../store/store";
import CustomDrawer from "../../../../config/component/Drawer/CustomDrawer";
import StudentForm from "./component/StudentForm";
import { Button, Grid } from "@chakra-ui/react";
// import StudentTable from "./component/StudentTable/StudentTable";
import ClassTableCard from "./component/ClassTableCard/ClassTableCard";
import MainRightContainer from "./component/mainRightContainer/MainRightContainer";

const StudentIndex = observer(() => {
  const {
    Student: {
      studentDrawerForm: { open },
      setHandleFormDrawer,
    },
  } = store;
  return (
    <div>
      <Grid gridTemplateColumns={{ lg : '1fr', xl: '1.1fr 0.6fr'}} gap={5} mb={5}>
      <ClassTableCard tableForm={() => setHandleFormDrawer("create")}/>
      <MainRightContainer />
      </Grid>
      <Button onClick={() => setHandleFormDrawer("create")} display="none">CREATE</Button>
      <CustomDrawer open={open} close={() => setHandleFormDrawer("create")} title="Add Student">
        <StudentForm />
      </CustomDrawer>
    </div>
  );
});

export default StudentIndex;
