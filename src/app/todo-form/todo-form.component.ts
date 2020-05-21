import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  @Output() delete = new EventEmitter<object>();

  ngOnInit(): void {
  }

  onTodoItemCreated(inputControl){
    this.add.emit(inputControl);
    inputControl.value ='';
  }

}
