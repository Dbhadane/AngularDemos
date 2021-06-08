import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Output() add: EventEmitter<number> = new EventEmitter<number>();


  onClick(): void {

    this.add.emit(this.num1 + this.num2);
  }

}
