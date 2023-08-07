export const authentication = {
    login : '/login',
    register : '/register',
    forgotPassword:'/forgot-password',
    resetPassword:'/reset-password/:token',
    verifyEmail:'/verify-account/:token',
    createOrganisation:'/create/organisation/:token',
    createOrganisationStep1:'/create/organisation',
}

export const dashboard = {
    home:'/dashboard',
    testimonial : '/dashboard/testimonial',
    videos:'/dashboard/videos',
    class:'/dashboard/class',
    student:{
      index : '/dashboard/students',
      create : '/dashboard/students/create'
    },
    teacher:{
      index : '/dashboard/teachers'
    },
    staff:{
      index : '/dashboard/staffs'
    }
}

export const main = {
  home: "/",
  about: "/about",
  changePassword: "/profile",
  contact: "/contact",
  courses: "/courses",
  testimonial: "/testimonial",
  video: "/videos",
  profile: "/profile",
  faq: "/faq",
  addingparaform: "/addingparaform",
};