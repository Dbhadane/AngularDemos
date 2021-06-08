import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    
    num1:number=0;
    num2:number=0;
    add:number=0;
    sub:number=0;
    mul:number=0;
    div:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  add1():number
  {
     this.add=(this.num1)+(this.num2);
    return this.add;
  }
  sub1():number
  {
     this.sub=this.num1-this.num2;

     return this.sub;
  }  
  mul1():number
  {
     this.mul=this.num1*this.num2;

     return this.mul;
  }
  div1():number
  {
     this.div=this.num1/this.num2;

     return this.div;
  }

}
