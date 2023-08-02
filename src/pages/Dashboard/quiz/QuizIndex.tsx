import {useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import QuizTable from "./component/QuizTable/QuizTable";
import ChartIndex from "./component/ChartIndex/ChartIndex";
import QuizCategories from "./component/category/QuizCategories";
import CustomDrawer from "../../../config/component/Drawer/CustomDrawer";

const QuizIndex = observer(() => {
  const [quizForm, setQuizForm] = useState({open : false, data : null, type : 'create'})
  const {
    quiz: {
      dashQuiz: { hasFetch },
      getDashQuiz,
    },
    auth: { openNotification },
    classStore : {getClasses}
  } = store;

  useEffect(() => {
    if (!hasFetch) {
      getDashQuiz()
        .then(() => {})
        .catch((err) => {
          openNotification({ message: err.message, title: "Get Quiz Failed" });
        });
    }
  }, [hasFetch, getDashQuiz, openNotification]);


  useEffect(() => {
    getClasses({})
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        openNotification({
          title: "Failed to Get Classes",
          message: err.message,
          type: "error",
        });
      });
  }, [getClasses, openNotification]);

  return (
    <div>
      <ChartIndex setQuizForm={setQuizForm} />
      <QuizTable />
      <CustomDrawer title="CREATE QUIZ" open={quizForm.open} close={() => {setQuizForm({type : 'create', data : null, open : false})}}>
        <QuizCategories />
      </CustomDrawer>
    </div>
  );
});

export default QuizIndex;
