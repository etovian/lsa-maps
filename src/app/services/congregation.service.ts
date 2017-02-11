import { Injectable } from '@angular/core';
import {Congregation} from "../classes/congregation";

@Injectable()
export class CongregationService {

    constructor() { }

    getAll(): Promise<any[]> {
        let coordinates = [
            { name: 'Christ Lutheran Church', lat: 40.648597, lng: -111.884845, logo: 'christ-lutheran.jpg', address: '240 5600 S, Murray, UT 84107', website: 'http://christutah.com/' }, //geographical center
            { name: 'St. John\'s Lutheran Church', lat: 40.746684, lng: -111.877382, logo: 'st-john.jpg', address: '1030 500 E Salt Lake City, UT 84105', website: 'https://stjohnslutheranslc.org/' },
            { name: 'Redeemer Lutheran Church', lat: 40.715840, lng: 0-111.835086, logo: 'redeemer-lutheran.jpg', address: '1955 E. Stratford Avenue, Salt Lake City, UT 84106', website: 'http://www.rlcs-slc.org/' },
            { name: 'Grace Lutheran Church', lat: 40.574001, lng: -111.840283, logo: 'grace-lutheran.jpg', address: '1815 E 9800 S, Sandy, UT 84092', website: 'http://www.gracesandy.org/' },
            { name: 'Holy Trinity Lutheran Church', lat: 40.510202, lng: -111.937056, logo: 'holy-trinity-riverton.jpg', address: '13249 S Redwood Rd, Riverton, UT 84065', website: 'http://www.holytrinityut.org/' }
        ];
        coordinates.sort((c1, c2) => c1.name > c2.name ? 1 : 0);
        return Promise.resolve(coordinates);
    }
}
