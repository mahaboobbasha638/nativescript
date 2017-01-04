"use strict";
var login_component_1 = require("./pages/login/login.component");
var customer_list_component_1 = require("./pages/customer-list/customer-list.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "customerlist", component: customer_list_component_1.CustomerListComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    customer_list_component_1.CustomerListComponent
];
//# sourceMappingURL=app.routing.js.map