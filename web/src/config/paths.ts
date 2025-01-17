export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },

  // auth: {
  //   register: {
  //     path: "/auth/register",
  //     getHref: (redirectTo?: string | null | undefined) =>
  //       `/auth/register${
  //         redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
  //       }`,
  //   },
  //   login: {
  //     path: "/auth/login",
  //     getHref: (redirectTo?: string | null | undefined) =>
  //       `/auth/login${
  //         redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
  //       }`,
  //   },
  // },

  app: {
    root: {
      path: "/app",
      getHref: () => "/app",
    },
    dashboard: {
      path: "",
      getHref: () => "/app",
    },
    tasks: {
      path: "tasks",
      getHref: () => "/app/tasks",
    },
    task: {
      path: "tasks/:taskId",
      getHref: (id: string) => `/app/tasks/${id}`,
    },
    // users: {
    //   path: "users",
    //   getHref: () => "/app/users",
    // },
    // profile: {
    //   path: "profile",
    //   getHref: () => "/app/profile",
    // },
  },
} as const;
