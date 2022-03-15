import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  addRemove:boolean  = true;
  message :string = '';
  companyName = "Revature";
  constructor() { }
  
  ngOnInit(): void {
  }

  toggleMessage(){
    if(this.addRemove == true){
        this.addRemove = false;
        this.message = "Product Added successfully"
    }
    else{
      this.addRemove = true;
      this.message = "Product Removed successfully"
    }
  }
}
