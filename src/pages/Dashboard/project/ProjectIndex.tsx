import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import CustomDrawer from "../../../config/component/Drawer/CustomDrawer";
import { Button } from "@chakra-ui/react";
import ProjectForm from "./component/Form/ProjectForm";

const ProjectIndex = observer(() => {
  const {
    Project: { openProjectDrawer, setOpenProjectDrawer },
  } = store;
  return (
    <div>
      <Button onClick={() => setOpenProjectDrawer("create", "")}>
        Open Drawer
      </Button>
      <CustomDrawer
        open={openProjectDrawer.open}
        close={setOpenProjectDrawer}
        title="Create Project"
      >
        <ProjectForm />
    </CustomDrawer>
    </div>
  );
});
export default ProjectIndex;
