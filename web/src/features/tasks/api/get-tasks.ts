import { queryOptions, useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";

export const getTasks = () => {
  return api.get("/tasks");
};

export const getTasksQueryOptions = () => {
  return queryOptions({
    queryKey: ["tasks"],
    queryFn: () => getTasks(),
  });
};

type UseTasksOptions = {
  queryConfig?: QueryConfig<typeof getTasksQueryOptions>;
};

export const useTasks = ({ queryConfig }: UseTasksOptions) => {
  return useQuery({
    ...getTasksQueryOptions(),
    ...queryConfig,
  });
};
