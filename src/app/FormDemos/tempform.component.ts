import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginuser(signpage: Form)
  {
    console.log(signpage);
    

  }

}
