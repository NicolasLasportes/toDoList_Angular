import { Component, OnInit } from '@angular/core';
import { list } from '../mock-list';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  List = list;
  selectedItem: List;
  constructor() { }
  
  ngOnInit() {
  }
  
  onSelect(list: List): void 
  {
    //console.log(this.selectedItem);
    this.selectedItem = list;
  }

  doneOrNot(item: List)
  {
    if(item.done == true)
    {
      item.done = false;
      item.doneStyle = "notDone";
    }
    else
    {
      item.done = true;
      item.doneStyle = "done";
    }
  }
}
