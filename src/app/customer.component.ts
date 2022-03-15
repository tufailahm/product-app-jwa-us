import { Component } from "@angular/core";

@Component({
    selector: 'cust-app',
    template : `<hr/><h1>Customer App</h1>
                <h1>My second day learnings
                    <br/>
                {{ customerName }}  
                <br/>
                {{ 2+2 }}
                <br/>
                {{ "Welcome "+ customerName + " and your bill amount is "+ billAmount}}
                <br/>
                <img [src]="imageURL">
                <br/>
                <input type="text" [value]="customerName">
                <br/>
                <button (click)="sayHello()">Change</button>
                <button (click)="sayBye()">Change Again</button>
                <br/>
            </h1>
                `
})
export class CustomerComponent
{
    customerName:string = "Richard"
    billAmount : number = 0;
    imageURL :string = "https://picsum.photos/200/300"
    constructor() {
        this.customerName = "Daniel"
        this.billAmount = 96000
    }

    sayHello(){
        this.customerName="Tufail";
        this.imageURL = "https://source.unsplash.com/1600x900/?portrait"
    }
    sayBye(){
        this.customerName="Amad";
        this.imageURL = "https://picsum.photos/200/300";
    }
}