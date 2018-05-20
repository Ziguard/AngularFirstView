import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isPlanif: boolean;


  constructor() { }

  ngOnInit() {
    this.isPlanif = false;
  }

  toPlanif(){
    if(this.isPlanif === false) {
      this.isPlanif = true;
    }
    else {
      this.isPlanif = false;
    }
  }
}
