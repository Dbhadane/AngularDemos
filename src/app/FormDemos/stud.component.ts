import { Component, OnInit } from '@angular/core';
import { Stud } from './stud';


@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent  {

  value: any;
  stud: Stud = {
    firstname: "Ganesha",
    lastname: "Omkara",
    rn:10,
    std:"10th",
    city: "heavens", 
    street: "Ganesh Nagar", 
    pincode: "400050"
  };

  logForm(fvalue: any) {
    this.value = fvalue;
    console.log(fvalue);
  }

}


