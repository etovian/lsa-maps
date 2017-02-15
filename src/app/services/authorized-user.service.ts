import { Injectable } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from "angularfire2";

@Injectable()
export class AuthorizedUserService {

    constructor(private af: AngularFire) { }

    get(id: string): FirebaseObjectObservable<any> {
        let url = `/authorizedUsers/${id}`;
        console.log(`requesting authorized user ${id} at ${url}`);
        return this.af.database.object(url, { preserveSnapshot: true });
    }

    getFullName(authorizedUser: any) {
        return `${authorizedUser.firstName} ${authorizedUser.lastName}`;
    }
}
