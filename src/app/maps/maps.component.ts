import { Component, OnInit } from '@angular/core';
import {CongregationService} from "../services/congregation.service";

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    private members: any[];
    selectedLocation: any;
    private supporters: any[];
    centerOn: any;
    zoom: number = 9;

    constructor(private congregationService: CongregationService) { }

    ngOnInit() {
        this.congregationService.getMembers().then(members => {
            this.members = members;
            this.centerOn = this.members[0];
            this.selectedLocation = this.members[0];
        });

        this.congregationService.getSupporters().then(supporters => {
            this.supporters = supporters;
        });
    }

    public selectLocation(location): void {
        this.selectedLocation = location;
    }


}
