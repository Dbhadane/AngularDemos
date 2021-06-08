import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudtest',
  templateUrl: './crudtest.component.html',
  styleUrls: ['./crudtest.component.css']
})
export class CrudtestComponent implements OnInit 
{
  id:number;
  name:string;
  price:number;
  products:any=[];
  isAdded:boolean=true;
  isEdited:boolean=true;
  selectedIndex:number=0;

  constructor() 
  {
    this.id=0;
    this.name="";
    this.price=0;
  }
  Add():void {
   
    this.products.push({
        "id":this.id,
        "name":this.name,
        "price":this.price
    });
  
    console.log(this.id);
    console.log(this.name);
    console.log(this.price);

    this.id=0;
    this.name="";
    this.price=0;
}
  ngOnInit(): void {
  }

  updateData():void{
    this.isEdited = false;
        this.isAdded = true;
        this.products[this.selectedIndex].id = this.id;
        this.products[this.selectedIndex].name = this.name;
        this.products[this.selectedIndex].price = this.price;

        this.id=0;
        this.name='';
        this.price=0;

  }
  removeProduct(i:number):void
  {
      this.products.splice(i,1);
  }
  
  editProduct(i:number){
    this.isEdited = true;
    this.isAdded = false;
    this.selectedIndex = i;
    this.id = this.products[i].id;
    this.name = this.products[i].name;
    this.price = this.products[i].price;
    
}
}
