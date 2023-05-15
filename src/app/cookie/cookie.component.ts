import { Component, Inject } from '@angular/core'

import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar'

import { Cookie } from '../models/cookie'

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css'],
})
export class CookieComponent {
  constructor(
    public cookieRef: MatSnackBarRef<CookieComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: Cookie,
  ) {}
  close() {
    this.cookieRef.dismiss()
  }
}
