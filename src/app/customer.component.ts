import { Component } from "@angular/core";

@Component({
    selector: 'cust-app',
    template : `<hr/><h1>Customer App</h1>
                <h1>My second day learnings
                    <br/>
                {{ customerName }}
                {{ 2+2 }}
                {{ "Welcome "+ customerName + " and your bill amount is "+ billAmount}}
            </h1>
                `
})
export class CustomerComponent
{
    customerName:string = "Richard"
    billAmount : number = 0;

    constructor() {
      //  this.customerName = "Daniel"
        this.billAmount = 96000
    }
}