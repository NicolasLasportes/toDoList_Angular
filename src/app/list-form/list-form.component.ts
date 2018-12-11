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
  model = new List(this.lastId + 1, "", false, "notDone");

  submitted = false;

  onSubmit() 
  { 
    this.submitted = true; 
  }

  newItem()
  {
    list.push(this.model);
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}