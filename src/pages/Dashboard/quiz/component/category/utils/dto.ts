export interface QuizCategoryValue {
  title: string;
  description: string;
  topics: {
    title: string;
    description: string;
  }[];
}

export interface QuizCategoryPara {
  submitForm: (
    values: {
      title: string;
      description: string;
      topics: {
        title: string;
        description: string;
      }[];
    },
    setSubmitting: (val: boolean) => void,
    resetForm: () => void
  ) => void;
  initialValues : QuizCategoryValue
}


