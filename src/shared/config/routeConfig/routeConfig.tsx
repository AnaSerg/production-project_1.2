import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { TestsPage } from 'pages/TestsPage';
import { ProjectsPage } from 'pages/ProjectsPage';
import { InterviewPage } from 'pages/InterviewPage';
import { MaterialsPage } from 'pages/MaterialsPage';
import { NotFoundPage } from 'pages/NotFoundPage';

enum AppRoutes {
    MAIN = 'main',
    TESTS = 'tests',
    PROJECTS = 'projects',
    INTERVIEW = 'interview',
    MATERIALS = 'materials',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TESTS]: 'tests',
    [AppRoutes.PROJECTS]: 'projects',
    [AppRoutes.INTERVIEW]: 'interview',
    [AppRoutes.MATERIALS]: 'materials',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.TESTS]: {
        path: RoutePath.tests,
        element: <TestsPage />,
    },
    [AppRoutes.PROJECTS]: {
        path: RoutePath.projects,
        element: <ProjectsPage />,
    },
    [AppRoutes.INTERVIEW]: {
        path: RoutePath.interview,
        element: <InterviewPage />,
    },
    [AppRoutes.MATERIALS]: {
        path: RoutePath.materials,
        element: <MaterialsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
