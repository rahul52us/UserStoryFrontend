import { Box, Button } from "@chakra-ui/react";
import Board from "./Board/Board";
import TaskHeader from "./component/TaskHeader/TaskHeader";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import CustomDrawer from "../../../config/component/Drawer/CustomDrawer";

const Task = observer(() => {
  return (
    <Box p={5}>
      <TaskHeader />
      <Button onClick={() => store.Task.setOpenTaskDrawer("create")}>
        Create Task
      </Button>
      <CustomDrawer title="Create Project" open={store.Task.openTaskDrawer.open} close={store.Task.setOpenTaskDrawer}>
         <p>rahul</p>
      </CustomDrawer>
      <Board />
    </Box>
  );
});

export default Task;
