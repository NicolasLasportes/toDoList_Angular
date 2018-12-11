import { Component } from '@angular/core';
import { list } from '../mock-list';
import { List } from '../list';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent {
  
  lastId = list[list.length-1].id;
  //model = new List(3, "rjfe", true, "notDone");

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.lastId); }
}