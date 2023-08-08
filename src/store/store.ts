import AuthStore from "./authStore/authStore";
import LayoutStore from "./layoutStore/LayoutStore";
import DashStore from "./authStore/dashStore";
import TestimonialStore from "./testimonialStore/testimonialStore";
import { configure } from "mobx";
import QuizStore from "./quizStore/quizStore";
import OrganisationStore from "./organisationStore/organisationStore";
import TaskStore from "./taskStore/taskStore";
import VideoStore from "./videosStore/videosStore";
import ProjectStore from "./projectStore/projectStore";
import ChatMessageStore from "./ChatMessageStore/ChatMessageStore";
import ThemeStore from "./themeStore/themeStore";
import NotesStore from "./notesStore/NotesStore";
import ClassStore from "./classStore/ClassStore";
import ExamStore from "./examStore/examStore";
import BlogStore from './blogStore/blogStore'
import StudentStore from "./userTypes/StudentStore";
configure({ enforceActions: "never" });

const store = {
  auth: new AuthStore(),
  themeStore: new ThemeStore(),
  quiz: new QuizStore(),
  layout: new LayoutStore(),
  DashStore: new DashStore(),
  TestimonialStore: new TestimonialStore(),
  Organisation: new OrganisationStore(),
  Task: new TaskStore(),
  Project: new ProjectStore(),
  VideoStore: new VideoStore(),
  chatMessage: new ChatMessageStore(),
  notesStore: new NotesStore(),
  classStore: new ClassStore(),
  ExamStore: new ExamStore(),
  BlogStore: new BlogStore(),
  // users
  Student: new StudentStore(),
};

export default store;
