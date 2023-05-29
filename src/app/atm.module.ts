import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AtmRoutingModule } from './atm-routing.module';
import { AtmComponent } from './atm.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CharactersComponent } from './characters/characters.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { CreaturesComponent } from './creatures/creatures.component';
import { LocationsComponent } from './locations/locations.component';
import { VideosComponent } from './videos/videos.component';
import { CookieComponent } from './cookie/cookie.component';
import { CookieService } from './services/cookie.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

const navigatorLang = navigator.language.split('-')[0];
const supportedLang = ['pl', 'en', 'ru'];
const lang = supportedLang.includes(navigatorLang) ? navigatorLang : 'en';
const materialModules = [MatButtonModule, MatSnackBarModule, MatIconModule];

@NgModule({
    declarations: [
        AtmComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        CharactersComponent,
        WeaponsComponent,
        CreaturesComponent,
        LocationsComponent,
        VideosComponent,
        CookieComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            defaultLanguage: lang,
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        AtmRoutingModule,
        ...materialModules,
    ],
    providers: [CookieService],
    bootstrap: [AtmComponent],
})
export class AtmModule {
    constructor(private cookieService: CookieService) {
        setTimeout(() => {
            this.cookieService.snackCookieAlert();
        }, 1000);
    }
}
