import { createAction } from "@reduxjs/toolkit";

export type TInitialState = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const ADD_TASK = createAction<TInitialState, 'add_task'>('add_task')
export const GET_TASKS = createAction<TInitialState, 'get_tasks'>('get_tasks')
export const REMOVE_TASK = createAction<TInitialState, 'remove_task'>('remove_task')
export const EDIT_TASK = createAction<TInitialState, 'edit_task'>('edit_task')
