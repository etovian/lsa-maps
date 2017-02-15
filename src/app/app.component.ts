import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthorizedUserService} from "./services/authorized-user.service";
import {AngularFire} from "angularfire2";
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    authorizationSubscription: Subscription;
    currentUser: any = null;

    constructor(private af: AngularFire, private authorizedUserService: AuthorizedUserService,
        private loginService: LoginService, private router: Router) {

    }

    ngOnInit(): void {
        this.subscribeToAuth();
    }

    public getUserName(): string {
        return this.authorizedUserService.getFullName(this.currentUser);
    }

    public logout(): void {
        this.loginService.logout();
        this.router.navigate(['/login']);
    }

    subscribeToAuth(): void {
        this.authorizationSubscription = this.af.auth.subscribe(auth => {
            if(auth) {
                this.authorizedUserService.get(auth.uid).subscribe(snapshot => {
                    this.currentUser = snapshot.val();
                });
            } else {
                this.currentUser = null;
            }
        });
    }
}
