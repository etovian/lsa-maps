import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'My first angular2-google-maps project';
    openInfoWindow: true;
    lat: number = 40.870680;
    lng: number = -111.879241;

    private coordinates = [
        // { name: 'Cross of Christ', lat: 40.870680,lng: -111.879241, logo: '' },
        { name: 'Christ' , lat: 40.648597, lng: -111.884845, logo: 'christ-lutheran.jpg' }, //geographical center
        { name: 'St. John\'s', lat: 40.746684, lng: -111.877382, logo: 'st-john.jpg' },
        { name: 'Redeemer' , lat: 40.715840, lng: 0-111.835086, logo: 'redeemer-lutheran.jpg' },
        { name: 'Grace' , lat: 40.574001, lng: -111.840283, logo: 'grace-lutheran.jpg' },
        { name: 'Holy Trinity' , lat: 40.510202, lng: -111.937056, logo: 'holy-trinity-riverton.jpg' }
    ];

    centerOn = this.coordinates[0];

    zoom: number = 10;

    onMarkerClick(marker): void {
        console.log(marker);
    }
}
