import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationComponent } from './authentication/authentication.component';
import { GlobalViewComponent } from './global-view/global-view.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthenticationComponent,
    GlobalViewComponent,
    DetailComponent
  ]
})
export class AppModule {}


