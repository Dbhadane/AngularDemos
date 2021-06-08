import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortest',
  templateUrl: './fortest.component.html',
  styleUrls: ['./fortest.component.css']
})
export class FortestComponent implements OnInit {
   employee:any[];
  constructor() 
  {
    this.employee =[
      {
           code:1,name:'DB',gender:'Male',salary:20000
      },
      {
           code:2,name:'mike',gender:'Male',salary:20000
      },
      {
           code:3,name:'giri',gender:'female',salary:20000
      },
      {
           code:4,name:'rupali',gender:'female',salary:80000
      }
    ];
   

  }
 

  ngOnInit(): void {
  }

}
