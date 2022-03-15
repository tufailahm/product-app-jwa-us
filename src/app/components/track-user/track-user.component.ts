import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-track-user',
  templateUrl: './track-user.component.html',
  styleUrls: ['./track-user.component.css']
})
export class TrackUserComponent implements OnInit,OnChanges,OnDestroy {

  public ename: string = "Daniel";

  constructor() {
    console.log("1. Track User cons called")
    this.ename = "Mary"
  }

  ngOnInit(): void {
    //here important code
    console.log("2. Track User ngOnInit called")
    this.ename = "Taylor"
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnDestroy(): void {
    
  }
 
  changeName() {
    console.log("Track User change name called")
    this.ename = "Adrian"
  }
}
