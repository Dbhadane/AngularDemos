import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankcrud',
  templateUrl: './bankcrud.component.html',
  styleUrls: ['./bankcrud.component.css']
})
export class BankcrudComponent implements OnInit {

  ac: number = 0;
  acname: string = "";
  actype: string = "";
  branch: string = "";
  bal: number = 0;
  deposite: number = 0;
  with: number = 0;
  bank:any=[];
  constructor() { }

  ngOnInit(): void {
  }

  Add(): void {
      this.bank.push(
        {
          "ac":this.ac,
          "acname":this.acname,
          "actype":this.actype,
          "branch":this.branch,
          "bal":this.bal
        }
      );
      console.log(this.ac+"  "+this.acname+" "+this.actype+" "+this.branch+" "+this.bal);
    this.ac = 0;
    this.acname = "";
    this .actype = "";
    this.branch = "";
    this.bal = 0;
  }
  removeAc(i: number): void {
    this.bank.pop(this.bank[i]);
  }
  editSal(i: number): void {

  }
  depo(i: number): void {

  }
  withbal(i: number): void {

  }

}
