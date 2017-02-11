import { Component, OnInit } from '@angular/core';
import {CongregationService} from "../services/congregation.service";

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    private coordinates: any[];
    selectedLocation: any;
    centerOn: any;
    zoom: number = 10;

    constructor(private congregationService: CongregationService) { }

    ngOnInit() {
        this.congregationService.getAll().then(coordinates => {
            this.coordinates = coordinates;
            this.centerOn = this.coordinates[0];
            this.selectedLocation = this.coordinates[0];
        });
    }

    public selectLocation(location): void {
        this.selectedLocation = location;
    }


}
