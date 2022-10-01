import "./NotesArea.scss";

import { useSelector } from "react-redux";

import Note from "./Note";

const NotesArea = () => {
  const filterItems = useSelector((state) => state.notes.filterItems);

  return (
    <div className="notesArea">
      {filterItems.map((item) => {
        return <Note key={item.id} item={item} />;
      })}
    </div>
  );
};

export default NotesArea;
