import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { singleTask, deleteTask } from "../api/tasks";
import styles from "../styles/SingleTask.module.css";

export default function SingleTask() {
  const nav = useNavigate();
  const { taskId } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    async function loadTask() {
      const result = await singleTask(taskId);
      setDetail(result);
    }
    loadTask();
  }, []);

  return (
    <div className={styles.main}>
      <h3 className={styles.title}>{detail.title}</h3>
      <h3 className={styles.description}>{detail.description}</h3>
      <div className={styles.buttons}>
        <button
        onClick={() => {
          deleteTask(taskId);
          nav("/");
        }}
      >
        DELETE
      </button>
      <button
        onClick={() => {
          nav(`/tasks/updating/${taskId}`);
        }}
      >
        UPDATE
      </button>
      </div>
      
    </div>
  );
}
