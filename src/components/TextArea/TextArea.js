import "./TextArea.scss";
import { useState } from "react";
import Controls from "./Controls";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";

const TextArea = () => {
  const [noteText, setNoteText] = useState("");
  const [color, setColor] = useState("#F06292");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText === "") return;
    dispatch(
      addNote({
        noteText,
        color,
      })
    );

    setNoteText("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    const wordFilter = e.target.value.replace(/[^a-z]/gi, "");
    setNoteText(wordFilter);
  };

  return (
    <div className="textAreaContainer">
      <div className="textArea">
        <form onSubmit={handleSubmit}>
          <textarea
            value={noteText}
            onChange={handleChange}
            className="textAreaInput"
            placeholder="Enter your note here..."
            autoFocus
          ></textarea>
          <Controls setColor={setColor} />
        </form>
      </div>
    </div>
  );
};

export default TextArea;
