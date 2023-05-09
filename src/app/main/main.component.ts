import { Component } from '@angular/core'

import { CookieService, SNACK_TYPE } from '../services/cookie.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor(private cookieService: CookieService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.cookieService.snackCookieAlert('COOKIE_BAR.CONTENT', SNACK_TYPE.INFO)
    }, 1000)
  }
}
