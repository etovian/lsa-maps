import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { AlertModule } from 'ng2-bootstrap';

import { MapsComponent } from './maps/maps.component';

import { CongregationService } from './services/congregation.service';

const apiKey = 'AIzaSyC6HNgs7X3vqerCF2wgR0v3CjPru9rA5Pc';

const appRoutes: Routes = [
    { path: '', component: MapsComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        MapsComponent
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
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        CongregationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
