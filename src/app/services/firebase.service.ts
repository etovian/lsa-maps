import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class FirebaseService {

    constructor(private af: AngularFire) { }

    getUpdateValue(object: any): any {
        let copy = Object.assign({}, object);
        delete copy.$key;
        delete copy.$exists;
        return copy;
    }

}
