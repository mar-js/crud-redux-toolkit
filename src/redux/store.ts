import { configureStore } from "@reduxjs/toolkit";
import tasks from './slices/tasks'

export const STORE = configureStore({
  reducer: {
    tasks
  },
})

export type RootState = ReturnType<typeof STORE.getState>
export type AppDispatch = typeof STORE.dispatch
