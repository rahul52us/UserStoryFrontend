import { Grid, GridItem } from "@chakra-ui/react";
import AddQuizCategory from "./AddQuizCategory";
import { observer } from "mobx-react-lite";

const QuizCategories = observer(() => {
  return (
    <Grid templateColumns={{base : "repeat(1,1fr)", xl : "repeat(2,1fr)"}}>
      <GridItem>
        <p>rahul</p>
      </GridItem>
      <GridItem>
        <AddQuizCategory />
      </GridItem>
    </Grid>
  )
})

export default QuizCategories;