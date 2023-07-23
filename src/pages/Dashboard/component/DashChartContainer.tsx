import { Card, Grid } from "@chakra-ui/react";
import BarChart from "../../../config/component/charts/BarChart";
import LineGraph from "../../../config/component/charts/LineChart";
import PieChart from "../../../config/component/charts/PieChart";
import DonutChart from "../../../config/component/charts/Doughnut";
import { observer } from "mobx-react-lite";

const DashChartContainer = observer(() => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={5}
      mb={5}
      mt={5}
    >
      <Card width={"100%"} minH={350} p={{ base: 0, sm: 2 }}>
        <BarChart />
      </Card>
      <Card width={"100%"} minH={350} p={{ base: 0, sm: 2 }}>
        <LineGraph />
      </Card>
      <Card width={"100%"} minH={350} p={{ base: 0, sm: 2 }}>
        <PieChart />
      </Card>
      <Card width={"100%"} minH={350} p={{ base: 0, sm: 2 }}>
        <DonutChart />
      </Card>
    </Grid>
  );
});

export default DashChartContainer;
