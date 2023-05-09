import { Injectable } from '@angular/core'

import { MatSnackBar } from '@angular/material/snack-bar'
import { TranslateService } from '@ngx-translate/core'

export enum SNACK_TYPE {
  'ERROR',
  'SUCCESS',
  'INFO',
}

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  constructor(
    private matSnackBar: MatSnackBar,
    private translateService: TranslateService,
  ) {}

  snackCookieAlert(i18nKey: string, type: SNACK_TYPE) {
    const action = this.translateService.instant('COOKIE_BAR.CLOSE')
    const message = this.translateService.instant(i18nKey)
    this.matSnackBar.open(message, action, {
      duration: 10000,
      panelClass: [
        type === SNACK_TYPE.ERROR
          ? 'error-snackbar'
          : type === SNACK_TYPE.INFO
          ? 'info-snackbar'
          : 'success-snackbar',
        'login-snackbar',
      ],
    })
  }
}
