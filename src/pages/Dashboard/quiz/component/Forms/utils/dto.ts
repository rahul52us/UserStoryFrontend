export interface QuizCategoryValue {
  title: string;
  description: string;
  section:any;
  class:any;
  categories:any

}

export interface QuizCategoryPara {
  submitForm: (
    values: {
      title: string;
      description: string;
      section:any;
      class:any;
      categories:any
    },
    setSubmitting: (val: boolean) => void,
    resetForm: () => void
  ) => void;
  initialValues : QuizCategoryValue
}