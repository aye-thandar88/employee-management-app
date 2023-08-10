"use  client";

import { HiTrash } from "react-icons/hi";
import { useQueryClient, useMutation } from "react-query";
import { deleteEmployee, getEmployees } from "@/libs/fetchApi";
import { useRouter } from "next/navigation";

const RemoveEmployee = ({ id }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const deleteMutation = useMutation((id) => deleteEmployee(id), {
    onSuccess: () => {
      queryClient.prefetchQuery("employees", getEmployees);
    },
  });

  const handleRemove = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      await deleteMutation.mutate(id);
    }

    router.refresh();
  };

  if (deleteMutation.isLoading) return console.log("Loading");
  if (deleteMutation.isError) return console.log(deleteMutation.error.message);
  if (deleteMutation.isSuccess) return console.log("delete Successfully");

  return (
    <button className="cursor" onClick={handleRemove}>
      <HiTrash size={24} />
    </button>
  );
};

export default RemoveEmployee;
