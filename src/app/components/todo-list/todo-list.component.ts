import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo,models';
import { Store } from '@ngrx/store';
import { addTodo, toggleTodo, removeTodo } from '../../store/actions/todo.actions';



@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  todos$: Todo[] = [];
  newTodoTitle = "";

  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    store.select('todos').subscribe((todosState: { todos: Todo[] }) => {
      this.todos$ = todosState.todos;
    })
  }

  addTodo(): void {
    if (this.newTodoTitle.trim() === '')
      return;

    const todo: Todo = {
      id: Date.now().toString(),
      title: this.newTodoTitle,
      completed: false,
      userId: 1
    }
    console.log("ADD");
    this.store.dispatch(addTodo({ todo }));
    this.newTodoTitle = '';

  }

  toggleTodo(id: string): void {
    console.log("Toggle");
    this.store.dispatch(toggleTodo({ id }));
  }

  removeTodo(id: string): void {
    console.log("pressed");
    this.store.dispatch(removeTodo({ id }));

  }
}
