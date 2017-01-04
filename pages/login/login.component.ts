import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    providers: [UserService]
})
export class LoginComponent {

    user: User;

    constructor(private router: Router, private userService: UserService){
        this.user = new User();
        this.user.username = "mahaboobbasha";
        this.user.password = '';
    }

    submit() {
        this.userService.login(this.user)
            .subscribe(
                result => {
                    if(result["flag"])
                        this.router.navigate(["/customerlist"])
                    else
                        alert("Password Wrong");
                },
                error => {alert("we could not find configuaration file.")}
            );
    }

}
