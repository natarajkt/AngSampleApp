import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRouters} from './app.routes';
import {DataService} from './data/data.service';
import {AuthService} from './auth.service';
import {PostDialogComponent} from './post-dialog/post-dialog.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostProductDialogComponent } from './post-product-dialog/post-product-dialog.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent,
    PostProductDialogComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    FormsModule,
    ReactiveFormsModule ,
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent,
    PostProductDialogComponent
  ]
})
export class AppModule {}
