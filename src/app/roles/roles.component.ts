import { Component, OnInit }  from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  displayedColumns = ['select', 'position', 'name','roles'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  trigram:string;
  roles:string;

  constructor() { }

  ngOnInit() {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
export interface Element {
  name: string;
  position: number;
  roles: string;
}

const ELEMENT_DATA: Element[] = [
  {position:1, name: 'test',roles:'Administrateur'},
  {position:2, name: 'test1',roles:'Planification'},
  {position:3, name: 'user1',roles:'Planificaiton'},
  {position:4, name: 'user1',roles:'Administrateur'},
];
