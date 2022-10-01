import "./Controls.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeBoxColor } from "../../redux/notes/notesSlice";

const Controls = ({ setColor }) => {
  const dispatch = useDispatch();
  const boxes = useSelector((state) => state.notes.boxes);

  return (
    <div className="controls">
      <ul className="colorBoxes">
        {boxes.map((box) => {
          return (
            <li
              onClick={() => {
                setColor(box.color);
                dispatch(changeBoxColor(box.id));
              }}
              key={box.id}
              style={{ backgroundColor: `${box.color}` }}
              className="colorBox"
            >
              <span>{box.checked && <AiOutlineCheck />}</span>
            </li>
          );
        })}
      </ul>
      <button className="addButton">ADD</button>
    </div>
  );
};

export default Controls;
