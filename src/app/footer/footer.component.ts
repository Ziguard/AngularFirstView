import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright:string;
  version:string;



  constructor() { }

  ngOnInit() {
    this.version="Version 1.0";
    this.copyright="azeaze";
  }

}
