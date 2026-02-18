import WelcomePage from './pages/WelcomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Welcome',
    path: '/',
    element: <WelcomePage />
  },
  {
    name: 'Quiz',
    path: '/quiz',
    element: <QuizPage />
  },
  {
    name: 'Result',
    path: '/result',
    element: <ResultPage />
  }
];

export default routes;
