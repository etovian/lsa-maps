import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {CongregationService} from "../services/congregation.service";
import {ModalComponent} from "../modal/modal.component";
import {EventEmitter} from "@angular/forms/src/facade/async";
import {FirebaseListObservable} from "angularfire2";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

    private congregationsObservable: FirebaseListObservable<any>;
    private congregationsSubscription: Subscription;
    private congregations: any[];

    private members = {
        displayProperty: 'name',
        headerText: 'Members',
        list: []
    };

    @ViewChild('memberModal')
    public readonly memberModal: ModalComponent;

    public editMemberFocusTriggeringEventEmitter = new EventEmitter<boolean>();

    private supporters = {
        displayProperty: 'name',
        headerText: 'Supporters',
        list: []
    };

    @ViewChild('memberModal')
    public readonly supporterModal: ModalComponent;

    public editSupporterFocusTriggeringEventEmitter = new EventEmitter<boolean>();

    selectedCongregation: any;

    constructor(private congregationService: CongregationService) { }

    ngOnInit() {

        this.congregationsObservable = this.congregationService.getCongregations()
        this.congregationsSubscription = this.congregationsObservable
            .subscribe((congregations) => {
                this.congregations = congregations;
                this.members.list = this.congregationService.getMemberCongregations(this.congregations);
                this.supporters.list = this.congregationService.getSupporterCongregations(this.congregations);
            });
    }

    ngOnDestroy(): void {
        this.congregationsSubscription.unsubscribe();
    }

    public addCongregation() {
        this.congregationService.add();
    }

    cancelEditMember(): void {
        this.memberModal.hide();
    }

    cancelEditSupporter(): void {
        this.supporterModal.hide();
    }

    deleteMember(): void {
        this.memberModal.hide();
    }

    deleteSupporter(): void {
        this.supporterModal.hide();
    }

    public getStatusList(): any[] {
        return this.congregationService.getStatusList();
    }

    saveCongregation(): void {
        this.congregationService.updateCongregation(this.selectedCongregation);
        this.memberModal.hide();
    }

    selectCongregation(congregation): void {
        this.selectedCongregation = congregation;
        this.memberModal.show();
    }

}
