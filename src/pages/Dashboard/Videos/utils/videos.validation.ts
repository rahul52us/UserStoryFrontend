import * as yup from 'yup'

const videosValidation = yup.object({
 title : yup.string().min(2,'title should be atleast of 2 character').max(120,'title should not be greater than 120 character').trim().required('title is required').typeError('Title is required'),
 videoType : yup.mixed().required('Select the any video type').typeError('Select the any video type'),
 videoLink : yup.string().min(4,'Link should be atleast of 3 character').max(350,'Link should not greater than 350 characters').trim().required('Link is required').typeError('Link is required'),
 description : yup.string().min(45,'description should be atleast of 45 character').max(1800,'description should not greater than 1800 characters').trim().typeError('description is required'),
})

export default videosValidation;
