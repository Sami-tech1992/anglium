// src/app/router.tsx
import { createBrowserRouter } from 'react-router';
import { PageLayout } from '@/shared/layout/PageLayout';
import { ROUTES } from '@/shared/config/routes';

// Импорт страниц
import { HomePage } from '@/pages/home';
import { CoursesPage } from '@/pages/courses';
import { CoursePage } from '@/pages/course';
import { DictionaryPage } from '@/pages/dictionary';
import { QuizPage } from '@/pages/quiz';
import { ProfilePage } from '@/pages/profile';
import { NotFoundPage } from '@/pages/not-found';

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: (
      <PageLayout>
        <HomePage />
      </PageLayout>
    ),
  },
  {
    path: ROUTES.courses,
    element: (
      <PageLayout>
        <CoursesPage />
      </PageLayout>
    ),
  },
  {
    // Для динамического пути используем функцию, которую написали
    // ROUTES.course(':courseId') вернет строку '/courses/:courseId'
    path: ROUTES.course(':courseId'),
    element: (
      <PageLayout>
        <CoursePage />
      </PageLayout>
    ),
  },
  {
    path: ROUTES.dictionary,
    element: (
      <PageLayout>
        <DictionaryPage />
      </PageLayout>
    ),
  },
  {
    path: ROUTES.quiz,
    element: (
      <PageLayout>
        <QuizPage />
      </PageLayout>
    ),
  },
  {
    path: ROUTES.profile,
    element: (
      <PageLayout>
        <ProfilePage />
      </PageLayout>
    ),
  },
  {
    path: '*', // Ловит все несуществующие пути
    element: (
      <PageLayout>
        <NotFoundPage />
      </PageLayout>
    ),
  },
]);
