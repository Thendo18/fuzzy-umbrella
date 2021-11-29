import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
todos: object[] | undefined;
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        'id': 1,
        'title': 'Clean the house',
        'completed': true,
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
  }


