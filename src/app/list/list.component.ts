import { Component, OnInit } from '@angular/core';
import { list } from '../mock-list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  List = list;
  constructor() { }

  ngOnInit() {
  }

}
