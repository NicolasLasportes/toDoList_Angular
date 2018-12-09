import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  selectedItem: List;
  List: List[];

  constructor(private listService: ListService) { }
  
  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.List = this.listService.getItems();
  }
  
  onSelect(list: List): void 
  {
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
