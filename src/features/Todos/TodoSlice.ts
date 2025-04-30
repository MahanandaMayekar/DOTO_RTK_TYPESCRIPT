import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit";
type Todo = {
  id: number,
  text: string,
  completed: boolean

}

type TodoState = {
  todo: Todo[];
};

const initialState: TodoState = {
  todo: [],
};


const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false

      }
      state.todo.push(newTodo)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload)

    },
    isComplete: (state, action: PayloadAction<number>) => {
      const todo = state.todo.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }

})

export const{isComplete,addTodo,deleteTodo}=TodoSlice.actions

export default TodoSlice.reducer