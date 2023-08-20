import { observer } from "mobx-react-lite"
import {useEffect, useCallback} from 'react'
import store from "../../../../store/store"

const QuizQuestionIndex = observer(() => {
  const {quiz : {getQuestionsByCategory}} = store

  const getQuestions = useCallback((id : any) => {
    getQuestionsByCategory(id).then(() => {

    }).catch(() => {

    })
  },[getQuestionsByCategory])

  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem('selectQuiz') || 'null'))
    console.log(JSON.parse(sessionStorage.getItem('selectQuizCategory') || 'null'))
    getQuestions(JSON.parse(sessionStorage.getItem('selectQuizCategory') || 'null')?._id)
  }, [getQuestions])

  return (
    <div>QuizQuestionIndex</div>
  )
})

export default QuizQuestionIndex