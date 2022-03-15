import { Component } from "@angular/core";

@Component({
    selector: 'review-app',
    templateUrl: 'review.component.html',
    styleUrls: ['review.component.css']
})

export class ReviewComponent {
    comment: string = "No comment";
    likeCounter: number = 0;
    unlikeCounter: number = 0;

    like() {
        this.likeCounter++;
        this.comment = "You liked our services";
    }
    unlike() {
        this.unlikeCounter++;
        this.comment = "Sorry to hear that. Please contact support@revature.net to give us feedback";
    }
}
