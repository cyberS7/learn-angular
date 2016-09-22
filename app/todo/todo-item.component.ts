import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo/todo-item.component.html',
    styleUrls: ['./app/todo/todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() deleted = new EventEmitter();

    constructor() { }

    toggleDone() {
        this.todo.done = !this.todo.done;
    }

    delete() {
        this.deleted.emit(this.todo);
    }

}