import { lazy } from "react";

const Home = lazy(() => import("../../pages/main/Home/Home"));
const About = lazy(() => import("../../pages/main/About/About"));
const Pricing = lazy(() => import("../../pages/main/pricing/Pricing"));
const Testimonial = lazy(
  () => import("../../pages/main/Testimonial/Testimonial")
);
const Contact = lazy(() => import("../../pages/main/Contact/Contact"));
const YoutubeVideoIndex = lazy(() => import('../../pages/main/youtubeVideos/YoutubeVideosIndex'))

export const MainPublicRoutes = [
  {
    element: <Home />,
    path: "/",
    publicRoute: true,
  },
  {
    element: <About />,
    path: "/about",
    publicRoute: true,
  },
  {
    element: <Pricing />,
    path: "/pricing",
    publicRoute: true,
  },
  {
    element: <Testimonial />,
    path: "/testimonial",
    publicRoute: true,
  },
  {
    element: <Contact />,
    path: "/contact",
    publicRoute: true,
  },
  {
    element : <YoutubeVideoIndex />,
    path: "/videos",
    publicRoute : true
  }
];
