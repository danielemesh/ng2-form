import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ErrorMessagesComponent } from './form/error-messages/error-messages.component';
import { FormItemComponent } from './form-item/form-item.component';
import { ErrorMessageComponent } from './form/error-messages/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ErrorMessagesComponent,
    FormItemComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
