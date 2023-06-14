import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
    selector: 'atm-footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    version = environment.version;
    title = environment.TITLE;
}
