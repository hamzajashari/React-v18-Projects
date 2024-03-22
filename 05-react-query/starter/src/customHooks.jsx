import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import customFetch from "./axios/utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  return { isLoading, isError, data };
};
export const useCreateTask = () => {
    const queryClient = useQueryClient();
    const { mutate: createTask, isLoading } = useMutation({
      mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
        toast.success('task added');
      },
      onError: (error) => {
        toast.error(error.response.data.msg);
      },
    });
    return { createTask, isLoading };
  };
export const useEditTasks = () => {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ id, isDone }) => {
      customFetch.patch(`/${id}`, { isDone: isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task checked");
    },
  });

  return { editTask };
};
export const useDeleteTasks = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: ({ id }) => {
      customFetch.delete(`/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task deleted");
    },
  });
  return { deleteTask, isLoading };
};
