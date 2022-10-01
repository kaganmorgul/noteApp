import { useDispatch } from "react-redux";

import {
  toggleCompleted,
  deleted,
  toggleDeleted,
} from "../../redux/notes/notesSlice";

import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";

const Note = ({ item }) => {
  const dispatch = useDispatch();

  const deleteNote = (id) => {
    setTimeout(() => {
      dispatch(deleted(id));
    }, 1000);
  };
  console.log("ok");
  return (
    <div
      key={item.id}
      style={{ backgroundColor: item.color }}
      className={!item.delete ? "notes deleted" : "notes"}
    >
      <p className={item.completed ? "notesText completed" : "notesText"}>
        {item.noteText}
      </p>
      <div className="notesControl">
        <span onClick={() => dispatch(toggleCompleted({ id: item.id }))}>
          {!item.completed ? <AiOutlineCheckCircle /> : <FiRefreshCcw />}
        </span>
        <span
          onClick={() => {
            dispatch(toggleDeleted(item.id));
            deleteNote(item.id);
          }}
        >
          <AiOutlineDelete />
        </span>
      </div>
    </div>
  );
};

export default Note;
