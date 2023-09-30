import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button' /*NUevo 29-9*/
import {MatInputModule} from '@angular/material/input' /*29-9 */

import { AppComponent } from './app.component';
import { ProcuctoListComponent } from './productos/procucto-list/procucto-list.component';
import { ProductoFilterPipe } from './productos/producto-filter.pipe';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Suma2Component } from './calculos/suma2/suma2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcuctoListComponent,
    ProductoFilterPipe,
    OperasBasComponent,
    Suma2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    MatButtonModule, /**29-9 */
    MatInputModule /**29-9 */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


