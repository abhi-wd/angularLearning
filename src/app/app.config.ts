import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { TodosReducer } from './store/reducers/todo.reducer';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
  provideStore({ todos: TodosReducer }),
  provideStoreDevtools(),
  ]
};
