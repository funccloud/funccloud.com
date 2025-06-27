import { provideHttpClient, withFetch } from '@angular/common/http'; // Importar withFetch
import {
  ApplicationConfig,
  LOCALE_ID,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideClientHydration,
  withIncrementalHydration,
} from '@angular/platform-browser'; // Importar provideMarkdown
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch()), // Habilitar fetch API para HttpClient
    provideMarkdown(),
    provideClientHydration(withIncrementalHydration()),
  ],
};
