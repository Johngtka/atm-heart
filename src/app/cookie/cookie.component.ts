import { Component } from '@angular/core'

import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css'],
})
export class CookieComponent {
  constructor(private matSnackBar: MatSnackBar) {}
  close() {
    this.matSnackBar.dismiss()
  }
}
