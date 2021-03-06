import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoItemComponent } from './todo/todo-item.component';
//import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: [ AppComponent, TodoListComponent, TodoItemComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
