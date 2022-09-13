import { Model,TodoItem } from './model';
import { Component } from '@angular/core';

@Component({
  //parent //dependency
  selector: 'todo-app ',
  templateUrl: 'app.component.html', //child //dependent //Observer
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  // CRL - Create, Register & Load  // C - orphan entity // registered

  //x = 100; //subscribers
  y =500;

  model =new Model(); //dependency / Observables

  getName(){
    return this.model.user;
  }

  getTodoItems(){
    return this.model.items.filter(item => !item.done)
  }

  addItem(newItem:any) {

    if (newItem != "") {

        this.model.items.push(new TodoItem(newItem, false)); // Observer

    }

}
}
