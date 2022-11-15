import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ADD_TASK, EDIT_TASK, GET_TASKS, REMOVE_TASK, TInitialState } from "./type";

const INITIAL_STATE: TInitialState[] =  []

const TASKS_SLICE = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    [ADD_TASK.type]: (state, action: PayloadAction<TInitialState>) => [...state, action.payload],
    [GET_TASKS.type]: (state) => state,
    [REMOVE_TASK.type]: (state, action: PayloadAction<string>) => state.filter(task => task.id !== action.payload),
    [EDIT_TASK.type]: (state, action: PayloadAction<TInitialState>) => [...state.filter(task => task.id !== action.payload.id), action.payload]
  }
})

export const { add_task, get_tasks, remove_task, edit_task } = TASKS_SLICE.actions
export default TASKS_SLICE.reducer
