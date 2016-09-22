import { Component } from '@angular/core';
import { Todo } from './todo/todo';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})
export class AppComponent {

    title: string;
    todos: Todo[];

    constructor() {
        this.title = 'Todo';
        this.todos = [];
     }

     onTodoAdded(todo: Todo) {
         //let title: string = input.value;
         //input.value = '';
        
         
        this.todos.push(todo);
         //this.todos.push(title);
     }

     
    
}