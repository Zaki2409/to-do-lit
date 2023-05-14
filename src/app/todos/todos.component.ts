import { Component , OnInit} from '@angular/core';
import { Todo } from '../todos';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localitem:string;
  todos:Todo[];
  constructor() {
    this.localitem = localStorage.getItem("todos");
    if (this.localitem ==null )
    {this.todos = [];}
    else {
      this.todos = JSON.parse(this.localitem);
    }

  }
  Deletetodo(todo:Todo) {
    console.log("todo");
    const index  = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  Addtodo(todo:Todo) {
    console.log("todo");
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  ngOnInit () :any {

  } 
}
