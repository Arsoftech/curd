"use client";
import { MdDeleteForever } from "react-icons/md";
import { useRouter } from "next/navigation";

const Removebtn = ({ id}) => {
  const router = useRouter();

  const deleteTopics = async () => {
    const confirmed = confirm("Are You Sure?");

    if (confirmed) {
      try {
        const res = await fetch(`/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          router.refresh();
        } else {
          alert("Failed to delete the topic.");
        }
      } catch (error) {
        console.error("Error deleting topic:", error);
        alert("An error occurred while deleting.");
      }
    }
  };

  return (
    <button
      onClick={deleteTopics}
      className="border-0 background-none text-danger me-3 mt-2"
    >
      <MdDeleteForever className="fs-3" />
    </button>
  );
};

export default Removebtn;
