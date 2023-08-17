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
      table : '/dashboard/students/:type',
      profile : '/dashboard/students/class/:className/:profileTab'
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
  changePassword: "/profile?&profileTab=change-password",
  contact: "/contact",
  courses: "/courses",
  testimonial: "/testimonial",
  video: "/videos",
  profile: "/profile",
  profileTab: "/profile/:profileTab",
  faq: "/faq",
  blog: "/blog",
  singleBlog:'/blog/:blogTitle',
  addingparaform: "/addingparaform",
};

export const privateMain = {
  createBlog: "/blog/create"
}