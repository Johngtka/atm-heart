import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CookieComponent } from '../cookie/cookie.component';

@Injectable({
    providedIn: 'root',
})
export class CookieService {
    constructor(private matSnackBar: MatSnackBar) {}

    snackCookieAlert() {
        this.matSnackBar.openFromComponent(CookieComponent, {
            data: {
                message: 'COOKIE_BAR.CONTENT',
                button: 'COOKIE_BAR.CLOSE',
            },
        });
    }
}
