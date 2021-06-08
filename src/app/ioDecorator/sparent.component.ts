import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sparent',
  templateUrl: './sparent.component.html',
  styleUrls: ['./sparent.component.css']
})
export class SparentComponent{

  ename: string = '';
  fromChild:string="";
  parentSearch(msg: string) {
   this.fromChild=msg;
  }

}
