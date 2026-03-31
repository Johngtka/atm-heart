import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'atm-root',
    templateUrl: './atm.component.html',
    styleUrls: ['./atm.component.css'],
})
export class AtmComponent implements OnInit {
    constructor(private router: Router) {}
    appEndingAlert!: boolean;

    ngOnInit(): void {
        this.appEndingAlert = true;
        this.router.navigate(['main']);
    }

    disableEndingAppAlert(): void {
        this.appEndingAlert = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
