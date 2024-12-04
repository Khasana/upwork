import React from "react";

import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { paths } from "@/config/paths";
// import { ProtectedRoute } from '@/lib/auth';

import { /*AppRoot,*/ AppRoot, AppRootErrorBoundary } from "./routes/app/root";

const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: async () => {
        const { LandingRoute } = await import("./routes/landing");
        return { Component: LandingRoute };
      },
    },
    // {
    //   path: paths.auth.register.path,
    //   lazy: async () => {
    //     const { RegisterRoute } = await import('./routes/auth/register');
    //     return { Component: RegisterRoute };
    //   },
    // },
    // {
    //   path: paths.auth.login.path,
    //   lazy: async () => {
    //     const { LoginRoute } = await import('./routes/auth/login');
    //     return { Component: LoginRoute };
    //   },
    // },
    {
      path: paths.app.root.path,
      element: (
        <>
          <AppRoot />
        </>
      ),
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        {
          path: paths.app.tasks.path,
          lazy: async () => {
            const { TasksRoute, tasksLoader } = await import(
              "./routes/app/tasks/tasks"
            );
            return {
              Component: TasksRoute,
              loader: tasksLoader(queryClient),
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        // {
        //   path: paths.app.discussion.path,
        //   lazy: async () => {
        //     const { DiscussionRoute, discussionLoader } = await import(
        //       "./routes/app/discussions/discussion"
        //     );
        //     return {
        //       Component: DiscussionRoute,
        //       loader: discussionLoader(queryClient),
        //     };
        //   },
        //   ErrorBoundary: AppRootErrorBoundary,
        // },
        // {
        //   path: paths.app.users.path,
        //   lazy: async () => {
        //     const { UsersRoute, usersLoader } = await import(
        //       "./routes/app/users"
        //     );
        //     return {
        //       Component: UsersRoute,
        //       loader: usersLoader(queryClient),
        //     };
        //   },
        //   ErrorBoundary: AppRootErrorBoundary,
        // },
        // {
        //   path: paths.app.profile.path,
        //   lazy: async () => {
        //     const { ProfileRoute } = await import("./routes/app/profile");
        //     return {
        //       Component: ProfileRoute,
        //     };
        //   },
        //   ErrorBoundary: AppRootErrorBoundary,
        // },
        {
          path: paths.app.dashboard.path,
          lazy: async () => {
            const { DashboardRoute } = await import("./routes/app/dashboard");
            return {
              Component: DashboardRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./routes/not-found");
        return {
          Component: NotFoundRoute,
        };
      },
      ErrorBoundary: AppRootErrorBoundary,
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = React.useMemo(
    () => createAppRouter(queryClient),
    [queryClient]
  );

  return <RouterProvider router={router} />;
};
