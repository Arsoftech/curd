'use client'
import Link from "next/link";
import Removebtn from "./removebtn";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";

const Topiclist = () => {
  const [topiclist, setTopiclist] = useState([]);
  const getTopics = async () => {
    try {
      const response = await fetch("/api/topics");
      const data = await response.json();
      // console.log(data);
      setTopiclist(data.topics);
    } catch (error) {
      console.error("Failed to fetch topics:", error);
    }
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <>
      {topiclist.map((t, index) => (
        <div key={index} className="container">
          <div className="d-flex justify-content-evenly border shadow p-2 mt-3">
            <div>
              <h1>{t.title}</h1>
              <p>{t.description}</p>
            </div>

            <div>
              <Removebtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <FaEdit className="fs-3 text-dark" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Topiclist;
