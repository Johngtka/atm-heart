import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CharactersComponent } from './characters/characters.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { CreaturesComponent } from './creatures/creatures.component';
import { LocationsComponent } from './locations/locations.component';
import { VideosComponent } from './videos/videos.component';

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
    {
        path: 'weap',
        component: WeaponsComponent,
    },
    {
        path: 'creat',
        component: CreaturesComponent,
    },
    {
        path: 'locat',
        component: LocationsComponent,
    },
    {
        path: 'vid',
        component: VideosComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AtmRoutingModule {}
