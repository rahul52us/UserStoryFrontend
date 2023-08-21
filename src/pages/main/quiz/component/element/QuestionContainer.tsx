import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Box, Text, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa"; // Import React Icons
import store from "../../../../../store/store";
import { useLocation, useNavigate } from "react-router-dom";

const QuestionContainer = observer(() => {
  const {
    quiz: { questions },
  } = store;

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

  const [userAnswers, setUserAnswers] = useState<any>({});
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | undefined>(undefined);
  const [submitted, setSubmitted] = useState<boolean>(false); // Track if answers have been submitted

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
    const selectedAnswer = currentQuestion.answers.find((ans: any) => ans.answer === answer);
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
    setSubmitted(true); // Mark answers as submitted
    // You can perform additional logic here if needed
  };

  const currentQuestion = questions.data[currentQuestionIndex];

  const numQuestions = questions.data.length;
  const numAnsweredQuestions = Object.keys(userAnswers).length;
  const isSubmitEnabled = numAnsweredQuestions === numQuestions && !submitted;

  const correctAnswers = questions.data.filter((question: any) => {
    const userAnswer = userAnswers[question._id];
    const correctAnswer = question.answers.find((answer: any) => answer.correct)?.answer;
    return userAnswer === correctAnswer;
  }).length;

  const wrongAnswers = numQuestions - correctAnswers;

  return (
    <Box p="4" boxShadow="md" rounded="md" borderWidth="1px" borderColor="gray.200">
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
                      {!answer.correct && userAnswers[currentQuestion._id] === answer.answer && (
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

      <Button
        onClick={handlePreviousQuestion}
        colorScheme="gray"
        mt="4"
        disabled={currentQuestionIndex === 0}
      >
        Previous
      </Button>

      {currentQuestionIndex < questions.data.length - 1 && (
        <Button onClick={handleNextQuestion} colorScheme="teal" mt="4">
          Next
        </Button>
      )}

      {isSubmitEnabled && (
        <Button onClick={handleSubmit} colorScheme="blue" mt="4">
          Submit
        </Button>
      )}

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
