import { useState } from "react";
import "./SearchArea.scss";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../redux/notes/notesSlice";

const SearchArea = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    dispatch(searchFilter(e.target.value));
  };

  return (
    <div className="searchArea">
      <input
        className="searchAreaInput"
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchArea;
