import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap } from "rxjs";
import { TodoService } from "../../services/todo.service";
import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../../models/todo.models';


@Injectable()
export class TodoEffects {
    constructor(private actions$: Actions, private todoService: TodoService) { }

    loadTodos$ = createEffect(() =>
        this.actions$.pipe(ofType(TodoActions.loadTodos),
            exhaustMap(() => this.todoService.getTodos().pipe(map((todos: Todo[]) => TodoActions.loadTodos({ todos }))))
        )
    )
}