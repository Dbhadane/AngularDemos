import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    mno:number;
    sname:string;
    lname:string;
    dob:string;
    mail:string;
    loc:string;

  constructor() 
  {
    this.mno=0;
    this.sname="";
    this.lname="";
    this.dob="";
    this.mail="";
    this.loc="";

  }

  ngOnInit(): void {
  }

}
