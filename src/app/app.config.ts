import { ApplicationConfig, LOCALE_ID, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient()
  ]
};
