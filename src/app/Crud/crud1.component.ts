import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud1',
  templateUrl: './crud1.component.html',
  styleUrls: ['./crud1.component.css']
})
export class Crud1Component implements OnInit {
  id: number = 0;
  name: string = "";
  sal: number = 0;
  profile: string = "";
  cmp: string = "";
  emp:any=[];
  isEdited:boolean = false;
 

  constructor() { }

  ngOnInit(): void {
  }

  Add():void
  {
      this.emp.push(
        {
          "id":this.id,
          "name":this.name,
          "sal":this.sal,
          "profile":this.profile,
          "cmp":this.cmp
        }
      );
      this.id= 0;
      this.name = "";
      this.sal = 0;
      this.profile = "";
      this.cmp = "";
  }
  removeEmp(i:number):void
  {
         this.emp.pop(this.emp[i]);
  }
   a:number=0;
  editEmp(i:number):void
  {
    this.isEdited = true;
   
    this.sal = this.emp[i].sal;
    this.profile=this.emp[i].profile;
      this. a=i;
  }
  updateData()
  {
      this.isEdited = false;
          this.emp[this.a].sal = this.sal;
          this.emp[this.a].profile = this.profile;
          this.id= 0;
      this.name = "";
      this.sal = 0;
      this.profile = "";
      this.cmp = "";
  
  }

}
