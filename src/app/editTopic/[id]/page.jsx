// E:\Curd\mongodbcurd\src\app\editTopic\[id]\page.jsx

import EditTopicForm from "@/app/components/editTopicForm";

const getTopicById = async  (id) => {
  try {
    const res = await fetch(`${NEXT_PUBLIC_API_UR}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}