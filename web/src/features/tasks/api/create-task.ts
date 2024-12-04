import { z } from "zod";

import { Task } from "@/types/api";
import { api } from "@/lib/api-client";
import { MutationConfig } from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasksQueryOptions } from "./get-tasks";

export const createTaskInputSchema = z.object({
  title: z.string().min(1, "Title is required").max(500),
  description: z.string().min(1, "Description is required").max(1000),
  dueDate: z.coerce.date({ required_error: "Due date is required" }),
  // .string().transform((str) => str ? new Date(str).toISOString() : null).nullable(),
  // completed: z.boolean().default(false).optional(),
});

export type CreateTaskInput = z.infer<typeof createTaskInputSchema>;

export const createTask = ({
  data,
}: {
  data: CreateTaskInput;
}): Promise<Task> => {
  return api.post(`/tasks`, data);
};

type UseCreateTasksOptions = {
  mutationConfig?: MutationConfig<typeof createTask>;
};

export const useCreateTask = ({ mutationConfig }: UseCreateTasksOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getTasksQueryOptions().queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: createTask,
  });
};
