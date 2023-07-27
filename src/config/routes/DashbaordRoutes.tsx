import { lazy } from "react";
import { dashboard } from "../constant/routes";

const DashboardIndex = lazy(
  () => import("../../pages/Dashboard/DashboardIndex")
);
const QuizDashIndex = lazy(
  () => import("../../pages/Dashboard/quiz/QuizIndex")
);

// task
const TaskIndex = lazy(() => import("../../pages/Dashboard/Task/Task"));

// project
const ProjectIndex = lazy(
  () => import("../../pages/Dashboard/project/ProjectIndex")
);
const CustomCalender = lazy(
  () => import("../../pages/Dashboard/CustomCalender/CustomCalender")
);

const Testimonial = lazy(
  () => import("../../pages/Dashboard/Testimonial/Testimonial")
);
const VideosIndex = lazy(
  () => import("../../pages/Dashboard/Videos/VideosIndex")
);

const NotesIndex = lazy(() => import('../../pages/Dashboard/Notes/NotesIndex'))

const MarksheetDesignTool = lazy(() => import('../component/CreateDeisgn/MarksheetDesignTool'))



export const DashboardRoutes = [
  {
    element: <DashboardIndex />,
    path: dashboard.home,
    privateRoutes: true,
  },
  {
    element: <QuizDashIndex />,
    path: "/dashboard/quiz",
    privateRoutes: true,
  },
  {
    element: <TaskIndex />,
    path: "/dashboard/task",
    privateRoutes: true,
  },
  {
    element: <NotesIndex />,
    path: '/dashboard/courses',
    privateRoutes: true
  },
  {
    element: <ProjectIndex />,
    path: "/dashboard/project",
    privateRoutes: true,
  },
  {
    element: <CustomCalender />,
    path: "/dashboard/calender",
    privateRoutes: true,
  },
  {
    element: <Testimonial />,
    path: dashboard.testimonial,
  },
  {
    element: <VideosIndex />,
    path: dashboard.videos,
    privateRoutes: true,
  },
  {
    element: <MarksheetDesignTool />,
    path:'/dashboard/marksheet',
    privateRoutes:true
  }
];
