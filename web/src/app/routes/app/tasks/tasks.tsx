import { QueryClient } from "@tanstack/react-query";
// import { LoaderFunctionArgs } from "react-router-dom";

import { ContentLayout } from "@/components/layouts";
import { CreateTask } from "@/features/tasks/components/create-task";
import { TasksList } from "@/features/tasks/components/tasks-list";
import { getTasksQueryOptions } from "@/features/tasks/api/get-tasks";

export const tasksLoader = (queryClient: QueryClient) => async () => {
  // const url = new URL(request.url);
  // const page = Number(url.searchParams.get("page") || 1);
  const query = getTasksQueryOptions();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const TasksRoute = () => {
  return (
    <ContentLayout title="Tasks">
      <div className="flex justify-end">
        <CreateTask />
      </div>

      <div className="mt-4">
        <TasksList />
      </div>
    </ContentLayout>
  );
};
