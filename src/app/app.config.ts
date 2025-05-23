import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Import the routes array

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // Provide the router with the routes array
  ]
};