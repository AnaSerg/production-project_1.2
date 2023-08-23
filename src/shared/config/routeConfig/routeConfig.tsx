import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {TestsPage} from "pages/TestsPage";
import {ProjectsPage} from "pages/ProjectsPage";
import {InterviewPage} from "pages/InterviewPage";
import {MaterialsPage} from "pages/MaterialsPage";

enum AppRoutes {
    MAIN = 'main',
    TESTS = 'tests',
    PROJECTS = 'projects',
    INTERVIEW = 'interview',
    MATERIALS = 'materials'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TESTS]: 'tests',
    [AppRoutes.PROJECTS]: 'projects',
    [AppRoutes.INTERVIEW]: 'interview',
    [AppRoutes.MATERIALS]: 'materials',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.TESTS]: {
        path: RoutePath.tests,
        element: <TestsPage />
    },
    [AppRoutes.PROJECTS]: {
        path: RoutePath.projects,
        element: <ProjectsPage />
    },
    [AppRoutes.INTERVIEW]: {
        path: RoutePath.interview,
        element: <InterviewPage />
    },
    [AppRoutes.MATERIALS]: {
        path: RoutePath.materials,
        element: <MaterialsPage />
    }
}