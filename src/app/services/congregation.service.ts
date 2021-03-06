import { Injectable } from '@angular/core';
import {Congregation} from "../classes/congregation";
import {FirebaseObjectObservable, AngularFire, FirebaseListObservable} from "angularfire2";
import Thenable = firebase.Thenable;
import {FirebaseService} from "./firebase.service";

@Injectable()
export class CongregationService {

    private url = '/congregations';

    constructor(private af: AngularFire, private firebaseService: FirebaseService) { }

    add(): Thenable<any> {

        return this.af.database.list(this.url).push(this.getNewCongregationTemplate());
    }

    getCongregations(): FirebaseListObservable<any> {
        return this.af.database.list(this.url);
    }

    getMembers(): Promise<any[]> {
        let members = [
            { name: 'Christ Lutheran Church', lat: 40.648597, lng: -111.884845, logo: 'christ-lutheran.jpg', address: '240 5600 S, Murray, UT 84107', website: 'http://christutah.com/' }, //geographical center
            { name: 'St. John\'s Lutheran Church', lat: 40.746684, lng: -111.877382, logo: 'st-john.jpg', address: '1030 500 E Salt Lake City, UT 84105', website: 'https://stjohnslutheranslc.org/' },
            { name: 'Redeemer Lutheran Church', lat: 40.715840, lng: -111.835086, logo: 'redeemer-lutheran.jpg', address: '1955 E. Stratford Avenue, Salt Lake City, UT 84106', website: 'http://www.rlcs-slc.org/' },
            { name: 'Grace Lutheran Church', lat: 40.574001, lng: -111.840283, logo: 'grace-lutheran.jpg', address: '1815 E 9800 S, Sandy, UT 84092', website: 'http://www.gracesandy.org/' },
            { name: 'Holy Trinity Lutheran Church', lat: 40.510202, lng: -111.937056, logo: 'holy-trinity-riverton.jpg', address: '13249 S Redwood Rd, Riverton, UT 84065', website: 'http://www.holytrinityut.org/' }
        ];
        members.sort((c1, c2) => c1.name > c2.name ? 1 : 0);
        return Promise.resolve(members);
    }

    getMemberCongregations(congregations: any[]): any[] {
        let members = congregations.filter(congregation => congregation.statusCode === 'MEMBER');
        members.sort((c1, c2) => c1.name > c2.name ? 1 : 0);
        return members;
    }

    getNewCongregationTemplate(): any {
        return {
            name: 'New Congregation',
            statusCode: 'SUPPORTER'
        };
    }

    getStatusList(): any[] {
        return [
            { code: 'MEMBER', description: 'Member' },
            { code: 'SUPPORTER', description: 'Supporter' }
        ]
    }

    getSupporterCongregations(congregations: any[]): any[] {
        let supporters = congregations.filter(congregation => congregation.statusCode === 'SUPPORTER');
        supporters.sort((c1, c2) => c1.name > c2.name ? 1 : 0);
        return supporters;
    }

    getSupporters(): Promise<any[]> {

        let supporters = [
            { name: 'Cross of Christ Lutheran Church', lat: 40.870680, lng: -111.879241, logo: '', address: '1840 S 75 E, Bountiful, UT 84010', website: 'http://crossofchristutah.com/' },
            { name: 'First Lutheran Church', lat: 40.537648, lng: -112.283545, logo: '', address: '349 North 7th Street Tooele UT 84074', website: 'https://www.facebook.com/FLCTU/?rf=146382985379941' }
        ];

        return Promise.resolve(supporters);
    }

    updateCongregation(congregation: any): Thenable<any> {
        let ref = `${this.url}/${congregation.$key}`;
        let obj = this.firebaseService.getUpdateValue(congregation);
        return this.af.database.object(ref).update(obj);
    }
}
