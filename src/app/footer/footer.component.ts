import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private translateService: TranslateService) {}

  setLang(lang: string) {
    this.translateService.use(lang)
  }
}
