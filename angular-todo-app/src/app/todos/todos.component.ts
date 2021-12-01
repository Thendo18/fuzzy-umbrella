import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos!:Todo[];
 todoTitle! : string;
 idForTodo = 1;
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
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false
    });
    this.todoTitle = '';
    this.idForTodo++;
  }
 
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);

  }

}

interface Todo {
id: number,
title: string,
completed: boolean,
editing: boolean
}