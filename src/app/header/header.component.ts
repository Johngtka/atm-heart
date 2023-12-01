import { Component, OnInit } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'atm-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    isFooterMobile!: boolean;
    constructor(private observer: BreakpointObserver) {}
    ngOnInit(): void {
        this.observer.observe(['(max-width: 600px)']).subscribe((device) => {
            if (device.matches) {
                this.isFooterMobile = true;
            } else {
                this.isFooterMobile = false;
            }
        });
    }
}
