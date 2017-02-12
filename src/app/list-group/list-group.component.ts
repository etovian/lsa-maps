import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'list-group',
    templateUrl: './list-group.component.html',
    styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {

    @Input()
    headerText: string;

    @Input()
    itemDisplayProperty: string;

    @Input()
    items: any[];

    @Input()
    selectedItem: any;

    constructor() { }

    ngOnInit() {
    }


    selectItem(item: any) {
        this.selectedItem = item;
    }

}
