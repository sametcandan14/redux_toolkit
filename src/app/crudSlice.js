import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Edit Navbar",
      author: "Samet",
      assigned_to: "Mehmet",
      deadline: "2023-07-25",
    },
    {
      id: 2,
      title: "Footer Animation",
      author: "Ahmet",
      assigned_to: "Veli",
      deadline: "2023-07-25",
    },
  ],
};

const crudSlice = createSlice({
  name: "crudSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload.id) {
        const index = state.tasks.findIndex((i) => i.id === action.payload.id);
        state.tasks[index] = action.payload;
        return;
      }

      action.payload.id = new Date().getTime();
      state.tasks = [...state.tasks, action.payload];
    },

    removeTask: (state, action) => {
      const index = state.tasks.findIndex((i) => i.id === action.payload);
      state.tasks.splice(index, 1);
    },
  },
});

export const { addTask, removeTask } = crudSlice.actions;

export default crudSlice.reducer;
