import { Component, Input, Directive } from '@angular/core';
import { TodoItemComponent } from './todo-item.component';
import { Todo } from './todo';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html',
    styleUrls: ['./app/todo/todo-list.component.css']
})

export class TodoListComponent {
    @Input() todos: Todo[];
    constructor() { }

    onTodoDeleted(todo: Todo) {
        if (todo) {
            let index = this.todos.indexOf(todo);
            if (index > -1) {
                this.todos.splice(index, 1);
            }
        }
    }

}