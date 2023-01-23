import { useState, useEffect } from "react";
import { allTasks } from "../api/tasks";
import { useNavigate } from "react-router";
import styles from "../styles/Alltask.module.css";

export default function AllTask() {
  const nav = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getAllTasks() {
      const task = await allTasks();
      setTasks(task);
    }
    getAllTasks();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.mainTitleButton}>
        <h3 className={styles.mainTitle}>CREATE A TASK FOR TODAY</h3>
        <button
          className={styles.createButton}
          onClick={() => {
            nav("/tasks/create");
          }}
        >
          CREATE TASK
        </button>
      </div>
      <div className={styles.allTasks}>
        {tasks.map((ta) => {
          return (
            <div className={styles.taskCard} key={ta.id}>
              <h3 className={styles.title}>{ta.title}</h3>
              <h4 className={styles.descriptionCard}>{ta.description}</h4>
              <button
                className={styles.moreinfoButton}
                onClick={(event) => {
                  event.preventDefault();
                  nav(`/tasks/${ta.id}`);
                }}
              >
                more about task
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
