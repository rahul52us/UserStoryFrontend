import AuthStore from './authStore/authStore';
import LayoutStore from './layoutStore/LayoutStore';
import DashStore from './authStore/dashStore';
import TestimonialStore from './testimonialStore/testimonialStore';
import { configure } from 'mobx';
import QuizStore from './quizStore/quizStore';
import OrganisationStore from './organisationStore/organisationStore';
import TaskStore from './taskStore/taskStore';
import ProjectStore from './projectStore/projectStore';
import ChatMessageStore from './ChatMessageStore/ChatMessageStore';
configure({ enforceActions: 'never' });

const store = {
  auth: new AuthStore(),
  quiz: new QuizStore(),
  layout: new LayoutStore(),
  DashStore: new DashStore(),
  TestimonialStore : new TestimonialStore(),
  Organisation : new OrganisationStore(),
  Task : new TaskStore(),
  Project : new ProjectStore(),
  chatMessage : new ChatMessageStore()
};
export default store;
