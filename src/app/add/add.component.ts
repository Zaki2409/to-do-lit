import { Component , OnInit , EventEmitter , Output} from '@angular/core';
import { Todo } from '../todos';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  implements OnInit{
@Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
title :string;
desc :string;
constructor() {};

Submit() {
  const todo = {
    sno:8,
    title : this.title,
    desc : this.desc,
    active : true 
  }
  this.todoAdd.emit(todo);
}





ngOnInit(): void {
  
}
}
