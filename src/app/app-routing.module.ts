import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './main/main.component'
import { CharactersComponent } from './characters/characters.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'char',
    component: CharactersComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
