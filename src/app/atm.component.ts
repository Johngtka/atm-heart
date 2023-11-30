import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'atm-root',
    templateUrl: './atm.component.html',
    styleUrls: ['./atm.component.css'],
})
export class AtmComponent implements OnInit {
    appEndingAlert!: boolean;
    ngOnInit(): void {
        this.appEndingAlert = true;
    }
    disableEndingAppAlert(): void {
        this.appEndingAlert = false;
    }
}
