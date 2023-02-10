import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private translateService: TranslateService) {}

  setLang(lang: string) {
    this.translateService.use(lang)
  }
}
