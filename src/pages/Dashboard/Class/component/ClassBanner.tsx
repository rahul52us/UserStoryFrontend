import {
  Box,
  Button,
  Card,
  Grid,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { CardBoxShadow } from "../../../../config/constant/variable";
import BarChart from "../../../../config/component/charts/BarChart";
import { observer } from "mobx-react-lite";

interface createClassI {
  createClass?: any;
}

const ClassBanner = observer(({ createClass }: createClassI) => {
  return (
    <Grid gridTemplateColumns={{ base: "1fr", xl: "1.3fr 1fr" }} gap={4}>
      <Card p={0} boxShadow={CardBoxShadow} borderRadius={10}>
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} p={0}>
          <Player
            autoplay
            loop
            src="/img/Classroom.json"
            style={{
              height: useBreakpointValue({ base: "100%", md: "280px" }),
            }}
          >
            <Controls visible={false} />
          </Player>
          <Box flex={1}>
            <Heading textAlign="center" fontSize={"2xl"} mt={5}>
              CREATE NEW CLASS
            </Heading>
            <Button
              onClick={() => {
                createClass({
                  open: true,
                  data: null,
                  type: "create",
                });
              }}
            >
              CLICK HERE
            </Button>
          </Box>
        </Box>
      </Card>
      <Card h={useBreakpointValue({ base: "100%", md: "280px" })} p={1}>
        <BarChart />
      </Card>
    </Grid>
  );
});

export default ClassBanner;
