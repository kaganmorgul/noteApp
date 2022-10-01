import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    boxes: [
      {
        id: 1,
        color: "#F06292",
        checked: true,
      },
      {
        id: 2,
        color: "#BA68C8",
        checked: false,
      },
      {
        id: 3,
        color: "#FFD54F",
        checked: false,
      },
      {
        id: 4,
        color: "#4FC3F7",
        checked: false,
      },
      {
        id: 5,
        color: "#AED581",
        checked: false,
      },
    ],
    filterItems: [],
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        state.filterItems.push(action.payload);
      },
      prepare: ({ noteText, color }) => {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            delete: true,
            noteText,
            color,
          },
        };
      },
    },
    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      const items = state.items.find((item) => item.id === id);
      items.completed = !items.completed;
      state.filterItems = state.items;
    },
    toggleDeleted: (state, action) => {
      const id = action.payload;
      const item = state.filterItems.find((item) => item.id === id);
      item.delete = false;
    },
    deleted: (state, action) => {
      const id = action.payload;
      const filteredNotes = state.filterItems.filter((item) => item.id !== id);
      state.filterItems = filteredNotes;

      const filteredNotes2 = state.filterItems.filter((item) => item.id !== id);
      state.items = filteredNotes2;
    },
    changeBoxColor: (state, action) => {
      const id = action.payload;
      const control = state.boxes.map((item) => {
        if (item.id === id) {
          item.checked = true;
        } else {
          item.checked = false;
        }
        return item;
      });

      state.boxes = control;
    },
    searchFilter: (state, action) => {
      const value = action.payload;

      const filteredItem = state.items.filter((filterItem) => {
        if (value === "") return state.filterItems;
        return filterItem.noteText
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase().trim());
      });

      state.filterItems = filteredItem;
    },
  },
});

export const {
  addNote,
  toggleCompleted,
  deleted,
  toggleDeleted,
  changeBoxColor,
  searchFilter,
} = notesSlice.actions;
export default notesSlice.reducer;
