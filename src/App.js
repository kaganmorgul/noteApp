import "./App.scss";
import "./sass/variable.scss";
import SearchArea from "./components/SearchArea/SearchArea";
import TextArea from "./components/TextArea/TextArea";
import NotesArea from "./components/NotesArea/NotesArea";
const App = () => {
  return (
    <div className="App">
      <h1 className="title">NotesApp</h1>
      <SearchArea />
      <TextArea />
      <NotesArea />
    </div>
  );
};

export default App;
