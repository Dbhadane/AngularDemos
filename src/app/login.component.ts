import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   uname:string;
   pwd:number;
  constructor() 
  {
       this.uname="";
       this.pwd=0;
  }

  ngOnInit(): void {
  }
    
  validate():void
  {
          if(this.pwd==123 && this.uname=='Dinu@123')
            alert("Successful");
          else
            alert("Incorrect creadintials")  
  }


}
