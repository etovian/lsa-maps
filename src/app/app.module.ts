import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { AlertModule } from 'ng2-bootstrap';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MapsComponent } from './maps/maps.component';

import { CongregationService } from './services/congregation.service';
import { ListGroupComponent } from './list-group/list-group.component';
import { AdminComponent } from './admin/admin.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from "./services/login.service";
import {FirebaseService} from "./services/firebase.service";

const apiKey = 'AIzaSyC6HNgs7X3vqerCF2wgR0v3CjPru9rA5Pc';

export const firebaseConfig = {
    apiKey: "AIzaSyCTDKposyINfTRQmdfNkaXsPpGCM8Luw4Q",
    authDomain: "lsa-maps.firebaseapp.com",
    databaseURL: "https://lsa-maps.firebaseio.com",
    storageBucket: "lsa-maps.appspot.com",
    messagingSenderId: "80155231502"
};

export const firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};

const appRoutes: Routes = [
    { path: '', component: MapsComponent },
    { path: 'admin', component: AdminComponent},
    { path: 'login', component: LoginComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        MapsComponent,
        ListGroupComponent,
        AdminComponent,
        ModalComponent,
        LoginComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: apiKey
        }),
        AlertModule.forRoot(),
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
    ],
    providers: [
        CongregationService,
        LoginService,
        FirebaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
