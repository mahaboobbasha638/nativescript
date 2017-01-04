"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var app_component_1 = require("./app.component");
nativescript_ng2_fonticon_1.TNSFontIconService.debug = true;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_1.NativeScriptModule,
                nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': 'font-awesome.css'
                })],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map