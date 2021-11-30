import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos!:any[];
 todoTitle! : string;
  constructor() { }

  ngOnInit() {
    this.todoTitle= '';
  this.todos = [
      {
        'id': 1,
        'title': 'Clean the house',
        'completed': false,
        'editing': false
      },
      {   'id': 2,
        'title': 'Wash the car',
        'completed': false,
        'editing': false
      },
      {   'id': 3,
        'title': 'book your next appointment',
        'completed': false,
        'editing': false
      }
    ];
  }
  addTodo(){
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    this.todos.push({
      id: this.todos.length + 1,
      title: this.todoTitle,
      completed: false,
      editing: false
    });
    this.todoTitle = '';
  }

}
