import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   eid:number;
   sname:string;
   lname:string;
   sal:number;
   total:number;
   HRA:number;
   GS:number;
   
  constructor() 
  {
       this.eid=0;
       this.sname=" ";
       this.lname="";
       this.sal=0;
       this.sal=0;
       this.total=0;
       this.GS=0;
       this.HRA=0;
  }

  ngOnInit(): void {
  }
   cal():void
   { 
     this.GS=(this.GS/100)*this.sal;
     this.HRA=(this.HRA/100)*this.sal;
     this.total=(this.GS)+(this.HRA)+(this.sal);

     console.log(this.GS +" "+this.HRA+" "+this.total);

   }
}
