import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { Task } from "@/types/api";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getTask = ({
  taskId,
}: {
  taskId: number;
}): Promise<{ data: Task }> => {
  return api.get(`/tasks/${taskId}`);
};

export const getTaskQueryOptions = (taskId: number) => {
  return queryOptions({
    queryKey: ["tasks", taskId],
    queryFn: () => getTask({ taskId }),
  });
};

type UseTaskOptions = {
  taskId: number;
  queryConfig?: QueryConfig<typeof getTaskQueryOptions>;
};

export const useTask = ({ taskId, queryConfig }: UseTaskOptions) => {
  return useQuery({
    ...getTaskQueryOptions(taskId),
    ...queryConfig,
  });
};
