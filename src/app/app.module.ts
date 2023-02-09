import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { TranslateModule } from '@ngx-translate/core'
import { TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { MainComponent } from './main/main.component';
import { CharactersComponent } from './characters/characters.component'

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient)
}

// const navigatorLang = navigator.language.split('-')[0]
// const supportedLang = ['pl', 'en', 'ru']
// const lang = supportedLang.includes(navigatorLang) ? navigatorLang : 'en'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent, CharactersComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
