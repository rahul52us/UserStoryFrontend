import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BiGrid } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import QuizCategoryCard from "../component/QuizCategoryCard";
import SkeletanCategoryCard from "../../../../config/component/Card/CategoryCard/SkeletanCategoryCard";

const QuizCategoryIndex = observer(() => {
  const navigate = useNavigate()
  const [selectQuizData, setSelectedQuizData] = useState<any>(null);
  const { state } = useLocation();

  useEffect(() => {
    try {
      if (state && sessionStorage.getItem("selectQuiz")) {
        setSelectedQuizData(
          JSON.parse(sessionStorage.getItem("selectQuiz") || "null")
        );
      } else {
      }
    } catch (err) {}
  }, [state]);

  const onClickEvent = (item : any , data: any) => {
    sessionStorage.setItem("selectQuizCategory", JSON.stringify(data));
    navigate(`/quiz/${selectQuizData?.title?.split(" ")?.join("-")}/${data.title?.split(" ")?.join("-")}`, {
      state: item._id,
    });
  };


  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column-reverse"
        bgGradient="linear-gradient(135deg, #AEE3FF, #72C7FF)"
      >
        <Container maxW="7xl" style={{ marginTop: "60px" }}>
          <Box display={"flex"} alignItems={"center"}>
            <Heading fontSize={"5xl"}>Quiz</Heading>
            <Button
              border="1px solid white"
              bgColor="rgba(255, 255, 255, 0.05)"
              borderRadius={30}
              pt={6}
              pb={6}
              ml={10}
              mt={2}
              _hover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              🎉 {2} Courses
            </Button>
          </Box>
          <Text mt={4} fontWeight={500}>
            Videos that help beginner designers become true unicorns.
          </Text>
          <Box mt={10} mb={40}>
            <ButtonGroup
              borderRadius={20}
              border="1px solid rgba(255, 255, 255, 0.05)"
              bgColor="rgba(255, 255, 255, 0.05)"
              p={2}
            >
              <Button
                borderRadius={20}
                w={100}
                leftIcon={<BiGrid />}
                bgColor={"blue.500"}
                color="white"
              >
                Grid
              </Button>
              <Button borderRadius={20} w={100} leftIcon={<FaList />}>
                List
              </Button>
            </ButtonGroup>
          </Box>
        </Container>
      </Box>
      <Container maxW={"8xl"}>
        <Box mt={"-70"} mb={10}>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {selectQuizData ? (
              selectQuizData?.category?.map((item: any, index: number) => (
                <Box key={index}>
                  <QuizCategoryCard item={item} onChange={(data : any) => onClickEvent(selectQuizData ,data)} />
                </Box>
              ))
            ) : (
              <SkeletanCategoryCard />
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
});

export default QuizCategoryIndex;