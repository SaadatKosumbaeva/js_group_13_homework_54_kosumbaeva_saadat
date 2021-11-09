import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { PlayingFieldComponent } from './playing-field/playing-field.component';
import { ControlBlockComponent } from './control-block/control-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    PlayingFieldComponent,
    ControlBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
