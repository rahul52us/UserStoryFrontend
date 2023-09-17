import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  Box,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa"; // Import React Icons
import store from "../../../../../store/store";
import { useLocation, useNavigate } from "react-router-dom";

const QuestionContainer = observer(() => {
  const {
    quiz: { questions },
  } = store;

  const [userAnswers, setUserAnswers] = useState<any>({});
  const [remainingTime, setRemainingTime] = useState(1 * 60);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | undefined>(
    undefined
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryQuestionId = queryParams.get("question");

  const queryQuestionIndex = questions.data.findIndex(
    (question: any) => question._id === queryQuestionId
  );
  const initialQuestionIndex =
    queryQuestionIndex !== -1 ? queryQuestionIndex : 0;

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(initialQuestionIndex);
  const navigate = useNavigate();
  useEffect(() => {
    if (remainingTime <= 0) {
      handleSubmit();
      return;
    }

    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [remainingTime]);


  useEffect(() => {
    if (queryQuestionId) {
      const dt: any = questions.data.findIndex(
        (item: any) => item._id.toString() === queryQuestionId
      );
      if (dt !== -1) {
        setCurrentQuestionIndex(dt);
      }
    }
  }, [queryQuestionId, questions.data]);

  useEffect(() => {
    const storedAnswers = JSON.parse(
      localStorage.getItem("userAnswers") || "{}"
    );
    setUserAnswers(storedAnswers);
  }, [queryQuestionId]);

  useEffect(() => {
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  }, [userAnswers]);

  const handleAnswerSelect = (questionId: any, answer: any) => {
    const selectedAnswer = currentQuestion.answers.find(
      (ans: any) => ans.answer === answer
    );
    setUserAnswers((prevAnswers: any) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
    setIsAnswerCorrect(selectedAnswer?.correct);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.data.length - 1) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      const nextQuestionId = questions.data[nextQuestionIndex]._id;
      navigate(
        `/quiz/new-Title-Quiz/new-title-category?question=${nextQuestionId}`
      );
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      const previousQuestionIndex = currentQuestionIndex - 1;
      const previousQuestionId = questions.data[previousQuestionIndex]._id;
      navigate(
        `/quiz/new-Title-Quiz/new-title-category?question=${previousQuestionId}`
      );
      setCurrentQuestionIndex(previousQuestionIndex);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const currentQuestion = questions.data[currentQuestionIndex];

  const numQuestions = questions.data.length;
  const numAnsweredQuestions = Object.keys(userAnswers).length;
  const isSubmitEnabled = numAnsweredQuestions === numQuestions && !submitted;

  const correctAnswers = questions.data.filter((question: any) => {
    const userAnswer = userAnswers[question._id];
    const correctAnswer = question.answers.find(
      (answer: any) => answer.correct
    )?.answer;
    return userAnswer === correctAnswer;
  }).length;

  const wrongAnswers = numQuestions - correctAnswers;

  const formatTime = (totalSeconds: any) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <Box
      p="4"
      boxShadow="md"
      rounded="md"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Text fontSize="sm" color="gray.500" mb="2">
        Time Remaining: {formatTime(remainingTime)}
      </Text>
      {currentQuestion ? (
        <>
          <Text fontSize="lg" fontWeight="semibold" mb="2">
            Question {currentQuestionIndex + 1}
          </Text>
          <Text fontSize="md" mb="4">
            {currentQuestion.question}
          </Text>
          <RadioGroup value={userAnswers[currentQuestion._id] || ""}>
            <Stack spacing="2">
              {currentQuestion.answers.map((answer: any) => (
                <Radio
                  isDisabled={submitted}
                  key={answer._id}
                  value={answer.answer}
                  colorScheme={
                    isAnswerCorrect !== undefined
                      ? isAnswerCorrect
                        ? "green"
                        : "red"
                      : "teal"
                  }
                  onChange={() =>
                    handleAnswerSelect(currentQuestion._id, answer.answer)
                  }
                >
                  {answer.answer}
                  {submitted && (
                    <>
                      {answer.correct && (
                        <FaCheck color="green" style={{ marginLeft: "8px" }} />
                      )}
                      {!answer.correct &&
                        userAnswers[currentQuestion._id] === answer.answer && (
                          <FaTimes color="red" style={{ marginLeft: "8px" }} />
                        )}
                    </>
                  )}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </>
      ) : (
        <div>No questions found.</div>
      )}

      <Flex justifyContent="space-between" mt="4">
        <Button
          onClick={handlePreviousQuestion}
          colorScheme="gray"
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>

        {currentQuestionIndex < questions.data.length - 1 && (
          <Button onClick={handleNextQuestion} colorScheme="teal">
            Next
          </Button>
        )}

        {isSubmitEnabled && (
          <Button onClick={handleSubmit} colorScheme="blue">
            Submit
          </Button>
        )}
      </Flex>

      <Box mt="4">
        {submitted && (
          <Text>
            Results: Correct: {correctAnswers} | Wrong: {wrongAnswers}
          </Text>
        )}
      </Box>
    </Box>
  );
});

export default QuestionContainer;
