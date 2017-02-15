import { Component, OnInit } from '@angular/core';
import {CongregationService} from "../services/congregation.service";
import {FirebaseListObservable} from "angularfire2";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    private congregationsObservable: FirebaseListObservable<any>;
    private congregationsSubscription: Subscription;
    private congregations: any[];

    private members: any[];
    selectedLocation: any;
    private supporters: any[];
    centerOn: any;
    zoom: number = 9;

    constructor(private congregationService: CongregationService) { }

    ngOnInit() {

        this.congregationsObservable = this.congregationService.getCongregations()
        this.congregationsSubscription = this.congregationsObservable
            .subscribe((congregations) => {
                this.congregations = congregations;
                this.members = this.congregationService.getMemberCongregations(this.congregations);
                this.supporters = this.congregationService.getSupporterCongregations(this.congregations);
                this.centerOn = this.members[0];
                this.selectedLocation = this.members[0];
            });
    }

    // ngOnInit() {
    //     this.congregationService.getMembers().then(members => {
    //         this.members = members;
    //         this.centerOn = this.members[0];
    //         this.selectedLocation = this.members[0];
    //     });
    //
    //     this.congregationService.getSupporters().then(supporters => {
    //         this.supporters = supporters;
    //     });
    // }

    public selectLocation(location): void {
        this.selectedLocation = location;
    }


}
