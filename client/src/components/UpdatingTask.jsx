import { useState } from "react";
import { updateTask } from "../api/tasks";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/Update.module.css"


export default function UpdatingTask() {
  const { taskId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const nav = useNavigate();
  return (
    <div className={styles.main}>
      <form
  
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await updateTask(taskId, title, description);
          console.log(result);
          nav("/");
        }}
      >
        
        <input
          variant="standard"
          value={title}
          type="text"
          placeholder="Change title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          variant="standard"
          value={description}
          type="text"
          placeholder="Change description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className={styles.updateButton}
        type="submit">UPDATE</button>
      </form>
    </div>
  );
}
