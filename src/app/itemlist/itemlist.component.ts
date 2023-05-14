import { Component ,  EventEmitter,  Input,  OnInit, Output} from '@angular/core';
import { Todo } from '../todos';


@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit{
  @Input() todo:Todo;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  constructor(){}
  onclick() {
    this.todoDelete.emit(this.todo);
    console.log("delete has been triggerd")
  }
  oncheckbox(todo) {
    
  }
  ngOnInit(): void {
    
  }

}
