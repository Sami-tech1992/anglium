// src/app/router.tsx
import { createBrowserRouter } from 'react-router';
import { PageLayout } from '@/shared/layout/PageLayout';
import { HomePage } from '@/pages/home';
import { CoursesPage } from '@/pages/courses';
import { CoursePage } from '@/pages/course';
import { DictionaryPage } from '@/pages/dictionary';
import { QuizPage } from '@/pages/quiz';
import { ProfilePage } from '@/pages/profile';
import { NotFoundPage } from '@/pages/not-found';
import { RouteError } from './RouteError';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'courses', element: <CoursesPage /> },
      { path: 'courses/:courseId', element: <CoursePage /> },
      { path: 'dictionary', element: <DictionaryPage /> },
      { path: 'quiz', element: <QuizPage /> },
      { path: 'profile', element: <ProfilePage /> },
      // Splat-маршрут: срабатывает для всех неизвестных путей
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
