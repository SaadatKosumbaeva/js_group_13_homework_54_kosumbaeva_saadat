import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { PlayingFieldComponent } from './playing-field/playing-field.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    PlayingFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
