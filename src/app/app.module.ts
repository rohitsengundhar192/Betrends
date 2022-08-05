import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from './base/base.component';
import { MaterialModule } from './shared/material.module';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { HomeComponent } from './home/home.component';
import { CrudopComponent } from './crudop/crudop.component';
import { MatCardTitle } from '@angular/material/card';
import { MatCard } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    RegComponent,
    HomeComponent,
    CrudopComponent,

  ],
  imports: [
    NgModule,
    BrowserModule,
    AppRoutingModule,RouterOutlet,
    BrowserAnimationsModule,
    MaterialModule,HttpClientModule,MatCardTitle,MatCard,
    RouterModule.forRoot([
      {path:"",component:CrudopComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
