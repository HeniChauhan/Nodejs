import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { ArrayComponent } from './array/array.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RformComponent } from './rform/rform.component';
import { ChatComponent } from './chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    ArrayComponent,
    RformComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
