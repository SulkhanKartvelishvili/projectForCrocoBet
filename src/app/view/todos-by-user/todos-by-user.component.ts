import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TodosService } from '../../core/http/todoService/todos.service';

@Component({
  selector: 'app-todos-by-user',
  templateUrl: './todos-by-user.component.html',
  styleUrl: './todos-by-user.component.css'
})
export class TodosByUserComponent implements OnInit{
  userId!: any;
  todosList:any =[];
  todosByUserList:any = [];

  constructor(private todosService:TodosService, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
this.activatedRoute.params.subscribe((response) => {
      this.userId = response["userId"];
   
    })

    this.todosService.getTodos().subscribe(todos => {
      this.todosList = todos;
      this.todosList.forEach((todo:any) => {
        if(this.userId == todo.userId){
          this.todosByUserList.push(todo);
        }
      });
      
    });

  }

}
