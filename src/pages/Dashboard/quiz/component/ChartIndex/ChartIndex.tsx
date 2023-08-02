import { observer } from "mobx-react-lite";
import { Button, Card, Grid } from "@chakra-ui/react";
import BarChart from "../../../../../config/component/charts/BarChart";
import { CardBoxShadow } from "../../../../../config/constant/variable";

interface QuizFormI {
  setQuizForm: (value: any) => void;
}

const ChartIndex = observer(({ setQuizForm }: QuizFormI) => {
  return (
    <div>
      <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <Card p={3} boxShadow={CardBoxShadow}>
          <BarChart />
        </Card>
        <Card p={3} boxShadow={CardBoxShadow}>
          <div>
            <Button
              onClick={() =>
                setQuizForm({ type: "create", open: true, data: null })
              }
            >
              Add New
            </Button>
          </div>
        </Card>
      </Grid>
    </div>
  );
});

export default ChartIndex;
