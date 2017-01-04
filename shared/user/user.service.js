"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        return this.http.get('~/shared/config/config.json')
            .map(function (response) {
            var results = response.json();
            if (results.dbuser.username == user.username &&
                results.dbuser.password == user.password) {
                results.flag = true;
            }
            else {
                results.flag = false;
            }
            return results;
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        alert(error.json().message);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map