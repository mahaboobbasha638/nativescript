import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ng2-fonticon';
import { User } from "./shared/user/user";

import { AppComponent } from "./app.component";

TNSFontIconService.debug = true;

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        TNSFontIconModule.forRoot({
            'fa': 'font-awesome.css'
        })],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
