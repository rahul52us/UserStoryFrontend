import { observer } from "mobx-react-lite"
import store from "../../../../../store/store"
import { toJS } from "mobx"

const QuizTable = observer(() => {
  const {quiz : {dashQuiz : {data}}} = store

  console.log(toJS(data))

  return (
    <div>QuizTable</div>
  )
})

export default QuizTable