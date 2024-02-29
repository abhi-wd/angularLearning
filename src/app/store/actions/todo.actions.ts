import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/todo,models";

export const addTodo = createAction('[Todos] Add Todo', props<{ todo: Todo }>());
export const removeTodo = createAction('[Todos] Remove Todo', props<{ id: String }>());
export const toggleTodo = createAction('[Todos] Toggle Todo', props<{ id: String }>());