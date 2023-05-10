import { Injectable } from '@angular/core'

import { MatSnackBar } from '@angular/material/snack-bar'

import { CookieComponent } from '../cookie/cookie.component'

export enum SNACK_TYPE {
  'ERROR',
  'SUCCESS',
  'INFO',
}

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  constructor(private matSnackBar: MatSnackBar) {}

  snackCookieAlert() {
    this.matSnackBar.openFromComponent(CookieComponent, {})
  }
}
