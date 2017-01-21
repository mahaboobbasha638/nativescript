# NativeScript

- creating project
    
        tns create project_name

- creating project with angular

        tns create my-app-name --ng

- Run in emulator

        tns run ios --emulator

- Sync on every change in code 

        tns livesync ios --emulator --watch

- install third party services and save to package

        npm install email-validator --save

- NativeScript plugin sources

        http://plugins.telerik.com/nativescript
        https://www.npmjs.com and search for nativescript

- adding plugins to nativescript

        tns plugin add nativescript-social-share

- adding platforms for app

        tns platform add ios
        tns platform add android

- adding NativeScript to angular cli

        npm i nativescript-ng2-magic --save
        https://www.npmjs.com/package/nativescript-ng2-magic


- updating latest version

        npm install -g nativescript@latest
        npm install tns-core-modules@latest --save

        tns platform remove android
        tns platform add android

        tns platform remove ios
        tns platform add ios


- running in agular cli

    - Run your app in the iOS Simulator with these options:
     
            npm run start.ios
            npm run start.livesync.ios

    - Run your app in an Android emulator with these options:
            
            npm run start.android
            npm run start.livesync.android

- adding fontawesome

        npm install nativescript-ng2-fonticon --save

        app/fonts/fontawesome-webfont.ttf

        .fa {
               font-family: FontAwesome, fontawesome-webfont;
        }

        app/font-awesome.css 

        import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
        imports: [
                NativeScriptModule,
                TNSFontIconModule.forRoot({
                'fa': 'font-awesome.css'
                })
        ]

        <Label class="fa" text="{{'fa-bluetooth' | fonticon}}"></Label>

- create project with master details template

        tns create my-app-name --template https://github.com/avatsaev/nativescript-master-detail-angular2.git


- Creating angular project with navigation drawer template

           tns create fertilizers --template nativescript-angular-drawer-template

  - OR else clone this sample app

        https://github.com/shripalsoni04/ns-ng-drawer-template-demo

  - OR clone sample-navigation brach of this git


- nativescript apps store

        http://nativescript.rocks/angular.php
