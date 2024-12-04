import * as z from "zod";
import { MutationConfig } from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { getTaskQueryOptions } from "./get-task";
import { Task } from "@/types/api";
import { api } from "@/lib/api-client";

export const updateTaskInputSchema = z.object({
  id: z.number().min(1, 'Required').optional(),
  title: z.string().min(1, "Required").optional(),
  description: z.string().min(1, "Required").optional(),
  dueDate: z.date({ required_error: "Due date is required" }).optional(),
  completed: z.boolean().default(false).optional(),
});

export type UpdateTaskInput = z.infer<typeof updateTaskInputSchema>;

export const updateTask = ({
  data,
  taskId,
}: {
  data: UpdateTaskInput;
  taskId: number;
}): Promise<Task> => {
  return api.patch(`/tasks/${taskId}`, data);
};

type UseUpdateTaskOptions = {
  mutationConfig?: MutationConfig<typeof updateTask>;
};

export const useUpdateTask = ({
  mutationConfig,
}: UseUpdateTaskOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (data, ...args) => {
      queryClient.refetchQueries({
        queryKey: getTaskQueryOptions(data.id).queryKey,
      });
      onSuccess?.(data, ...args);
    },
    ...restConfig,
    mutationFn: updateTask,
  });
};
