import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    title: any;

    constructor(){
        this.title = "my cute application test";
    }

    submit() {
        console.log("hello");
    }

}
