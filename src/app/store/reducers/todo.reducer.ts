import { createReducer, on } from "@ngrx/store";
import { addTodo, toggleTodo, removeTodo, loadTodos } from "../actions/todo.actions";
import { Todo } from "../../models/todo.models";

export interface TodoState {
    todos: Todo[];
}

export const initialState: TodoState = {
    todos: [],
}

export const TodosReducer = createReducer(
    initialState,
    on(loadTodos, (state, { todos }) => ({ ...state, todos })),
    on(addTodo, (state, { todo }) => ({
        ...state,
        todos: [...state.todos, todo]
    })),
    on(removeTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
    })),
    on(toggleTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    }))

)