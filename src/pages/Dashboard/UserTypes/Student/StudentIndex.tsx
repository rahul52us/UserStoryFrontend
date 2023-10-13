import { observer } from "mobx-react-lite";
import { Grid } from "@chakra-ui/react";
import ClassTableCard from "./component/ClassTableCard/ClassTableCard";
// import MainRightContainer from "./component/mainRightContainer/MainRightContainer";

const StudentIndex = observer(() => {
  return (
    <Grid gridTemplateColumns={{ lg: "1fr", xl: "1fr" }} gap={5} mb={5}>
      <ClassTableCard tableForm={() => {}} />
      {/* <Box>
        <MainRightContainer />
      </Box> */}
    </Grid>
  );
});
export default StudentIndex;