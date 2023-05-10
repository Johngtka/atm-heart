import { Component } from '@angular/core'

import { CookieService } from '../services/cookie.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor(private cookieService: CookieService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.cookieService.snackCookieAlert()
    }, 1000)
  }
}
