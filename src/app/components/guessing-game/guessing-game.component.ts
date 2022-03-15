import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guessing-game',
  templateUrl: './guessing-game.component.html',
  styleUrls: ['./guessing-game.component.css']
})
export class GuessingGameComponent implements OnInit {

  clickedCounter: number;
  counter = new Array();
  message : string =''
  temp: number;
  constructor() {
    this.clickedCounter = 0;
    this.temp = 0;
  }

  ngOnInit(): void {
    this.message = ""
  }

  buttonClicked(value: number) {
    console.log(value)
    var i = 0;
    for (i = 0; i < 5; i++) {
        if(value == 1){
          this.counter[0] = this.counter[0] +1;
          console.log("this.counter[0]" + this.counter[0]);
        }
        if(value == 2){
          this.counter[1] = this.counter[1] +1;
        }
        if(value == 3){
          this.counter[2] = this.counter[2] +1;
        }
        if(value == 4){
          this.counter[3] = this.counter[3] +1;
        }
        if(value == 5){
          this.counter[4] = this.counter[4] +1;
        }
        if(this.counter[i] ===3){
            this.message = "Bingo. Congrats, You selected : "+value+" which is 100% correct"
        }
        else{
          this.message = "You selected : "+value+ " which is wrong." 
        }
    }
  }
}
