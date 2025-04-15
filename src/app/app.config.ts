import { ApplicationConfig, LOCALE_ID, provideExperimentalZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importar withFetch
import { provideMarkdown } from 'ngx-markdown'; // Importar provideMarkdown

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch()), // Habilitar fetch API para HttpClient
    provideMarkdown(), // Adicionar o provider do ngx-markdown
  ]
};
