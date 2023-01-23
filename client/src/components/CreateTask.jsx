import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../api/tasks";
import styles from "../styles/CreateTask.module.css"

export default function CreateTask() {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.main}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = createTask(title, description);
          setTitle("");
          setDescription("");
          console.log("Result", result);
          nav("/")
        }}
      >
       {/*input for title  */}
     
        <input
          variant="standard"
          value={title}
          type="text"
          placeholder="Title of Task"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
       {/* input for descrption */}
    
        <input
          variant="standard"
          value={description}
          type="text"
          placeholder="Description of Task"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <button 
          className={styles.createButton}
        type="submit">Create</button>
      </form>
    </div>
  );
}
