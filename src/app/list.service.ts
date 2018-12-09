import { Injectable } from '@angular/core';
import { List } from './list';
import { list } from './mock-list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  constructor() { }
  
  getItems(): List[] {
    return list;
  }
}
