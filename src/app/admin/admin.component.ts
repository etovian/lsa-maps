import {Component, OnInit, ViewChild} from '@angular/core';
import {CongregationService} from "../services/congregation.service";
import {ModalComponent} from "../modal/modal.component";
import {EventEmitter} from "@angular/forms/src/facade/async";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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

    private selectedCongregation: any;

    constructor(private congregationService: CongregationService) { }

    ngOnInit() {
        this.congregationService.getMembers().then(members => this.members.list = members);
        this.congregationService.getSupporters().then(supporters => this.supporters.list = supporters);
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

    saveCongregation(): void {

        this.memberModal.hide();
    }

    selectCongregation(congregation): void {
        this.selectedCongregation = congregation;
        this.memberModal.show();
    }

}
