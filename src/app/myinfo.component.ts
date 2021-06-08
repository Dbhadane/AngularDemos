import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent {

   fname:string;
   lname:string;
   g:string;
   technology:string;
  
  constructor() 
  { 
   this. fname="Dnyaneshwar";
    this.lname="Bhadane";
    this.g="Male";
    this.technology="Java";
  }


}
