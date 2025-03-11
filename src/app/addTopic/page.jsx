"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(!title || !description){
      alert("Title and Description is required");
    }
    try{
      const res = await fetch('/api/topics',{
        headers:{
          "Content-type":"application/json",
        },
        method:"POST",
        body: JSON.stringify({title,description})
      });

      if(res.ok){
       router.push("/")

      }else{
        throw new Error("Failed to add Topics");
      }

    }catch(error){
      console.log(error);
    }

  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container mt-2">
          <input
            type="text"
            className="form-control border shadow p-3 mt-3"
            placeholder="Topic Heading"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            className="form-control border shadow p-5 mt-3"
            placeholder="Topic paragraph"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
          />
          <div className="mt-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-success w-25  p-2">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddTopic;
