import * as Yup from 'yup';

// ... Your FormComponent code ...

const CategoryValidation = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  rating:Yup.number().max(5,'Rating cannot be greater than 5').min(1,'Rating cannot be less than 1').required('rating is required'),
  pricingType: Yup.mixed().required('Pricing Type is required'),
  amountType: Yup.mixed().required('Amount Type is required'),
  discountPrice: Yup.number().required('Discount Price is required'),
  originalPrice: Yup.number().required('Original Price is required'),
  startYear: Yup.date().required('Start Year is required'),
  endYear: Yup.date()
    .required('End Year is required')
    .min(Yup.ref('startYear'), 'End Year must be later than Start Year'),
  description: Yup.string().required('Description is required'),
  details: Yup.mixed().required('Details is required').typeError('Details is requird'),
});

export default CategoryValidation;