"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new user_1.User();
        this.user.username = "mahaboobbasha";
        this.user.password = '';
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function (result) {
            if (result["flag"])
                _this.router.navigate(["/customerlist"]);
            else
                alert("Password Wrong");
        }, function (error) { alert("we could not find configuaration file."); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map