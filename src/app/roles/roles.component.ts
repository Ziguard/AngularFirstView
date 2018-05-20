import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  trigram:string;
  roles:string;

  constructor() { }

  ngOnInit() {
    this.trigram='test';
    this.roles='roles';
  }

}
