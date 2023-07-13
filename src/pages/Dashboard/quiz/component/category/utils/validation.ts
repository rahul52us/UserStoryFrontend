import * as Yup from 'yup';

const topicValidation = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Topic must be at least 3 characters')
    .max(120, 'Topic must not exceed 120 characters').required('topic is required'),
  description: Yup.string().min(3,'description must be at least 3 characters').max(220, 'Description must not exceed 220 characters')
});

const categoryValidation = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Category must be at least 3 characters')
    .max(120, 'Category must not exceed 120 characters')
    .required('Category is required'),
  description: Yup.string().min(3,'description must be at least 3 characters').max(220,'Description must not exceed 220 characters'),
  topics: Yup.array().of(topicValidation),
});

export default categoryValidation;
