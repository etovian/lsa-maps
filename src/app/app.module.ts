import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

let apiKey = 'AIzaSyC6HNgs7X3vqerCF2wgR0v3CjPru9rA5Pc';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: apiKey
        }),
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
