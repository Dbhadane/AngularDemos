import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  value: any;
  contact: Contact = {
    firstname: "Ganesha",
    lastname: "Omkara",
    city: "heavens", 
    street: "Ganesh Nagar", 
    pincode: "400050"
  };

  logForm(fvalue: any) {
    this.value = fvalue;
    console.log(fvalue);
  }

}
