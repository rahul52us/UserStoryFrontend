import { lazy } from "react";
import { main } from "../constant/routes";
import AddingparaForm from "../../pages/main/Contact/AddingparaForm";
const Home = lazy(() => import("../../pages/main/Home/Home"));
const About = lazy(() => import("../../pages/main/About/About"));
const ProfileIndex = lazy(
  () => import("../../pages/main/profile/ProfileIndex")
);
const Pricing = lazy(() => import("../../pages/main/pricing/Pricing"));
const Testimonial = lazy(
  () => import("../../pages/main/Testimonial/Testimonial")
);
const Contact = lazy(() => import("../../pages/main/Contact/Contact"));
const YoutubeVideoIndex = lazy(
  () => import("../../pages/main/Videos/VideosIndex")
);
const CoursesIndex = lazy(() => import("../../pages/main/courses/Courses"));
const Faq = lazy(() => import("../../pages/main/Faq/Faq"));

// Blog Sections

export const MainPublicRoutes = [
  {
    element: <Home />,
    path: main.home,
    publicRoute: true,
  },
  {
    element: <About />,
    path: main.about,
    publicRoute: true,
  },
  {
    element: <Pricing />,
    path: "/pricing",
    publicRoute: true,
  },
  {
    element: <Testimonial />,
    path: main.testimonial,
    publicRoute: true,
  },
  {
    element: <Contact />,
    path: main.contact,
    publicRoute: true,
  },
  {
    element: <YoutubeVideoIndex />,
    path: main.video,
    publicRoute: true,
  },
  {
    element: <CoursesIndex />,
    path: main.courses,
    publicRoutes: true,
  },
  {
    element: <ProfileIndex />,
    path: main.profile,
    publicRoutes: false,
  },
  {
    element: <Faq />,
    path: main.faq,
    publicRoutes: true,
  },
  {
    element: <AddingparaForm />,
    path: main.addingparaform,
    publicRoutes: true,
  },
];
