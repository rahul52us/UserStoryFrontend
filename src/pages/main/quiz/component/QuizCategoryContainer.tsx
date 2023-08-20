import { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import QuizCategoryCard from "./QuizCategoryCard";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";
import SkeletanCategoryCard from "../../../../config/component/Card/CategoryCard/SkeletanCategoryCard";
import { useNavigate } from "react-router-dom";

const QuizCategoryContainer = observer(() => {
  const navigate = useNavigate();
  const {
    quiz: { getDashQuiz, dashQuiz },
  } = store;

  useEffect(() => {
    getDashQuiz()
      .then((data) => {
        console.log(data);
      })
      .catch(() => {});
  }, [getDashQuiz]);

  const onClickEvent = (item: any) => {
    sessionStorage.setItem("selectQuiz", JSON.stringify(item));
    navigate(`/quiz/${item.title?.split(" ")?.join("-")}`, {
      state: item._id,
    });
  };

  return (
    <Box p={5}>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {!dashQuiz.loading
          ? dashQuiz.data.map((item: any, index: number) => (
              <Box key={index}>
                <QuizCategoryCard
                  item={item}
                  onChange={(data: any) => {
                    onClickEvent(data);
                  }}
                />
              </Box>
            ))
          : [1, 2, 3, 4, 5].map((item) => {
              return <SkeletanCategoryCard key={item} />;
            })}
      </Grid>
    </Box>
  );
});

export default QuizCategoryContainer;
