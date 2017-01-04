
import { LoginComponent } from "./pages/login/login.component";
import { CustomerListComponent } from "./pages/customer-list/customer-list.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "customerlist", component: CustomerListComponent }
];

export const navigatableComponents = [
  LoginComponent,
  CustomerListComponent
];