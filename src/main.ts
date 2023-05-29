import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AtmModule } from './app/atm.module';

platformBrowserDynamic()
    .bootstrapModule(AtmModule)
    .catch((err) => console.error(err));
