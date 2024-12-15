import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';

import { AuthenticationComponent } from './app/authentication/authentication.component';
import { GlobalViewComponent } from './app/global-view/global-view.component';
import { DetailComponent } from './app/detail/detail.component';

// Define your routes here
const routes: Routes = [
  { path: '', component: AuthenticationComponent }, // Default route (Login Page)
  { path: 'global-view', component: GlobalViewComponent }, // Global view of cars
  { path: 'detail/:id', component: DetailComponent } // Detail page with dynamic ID
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes) // Provide routes here
  ]
}).catch(err => console.error(err));
