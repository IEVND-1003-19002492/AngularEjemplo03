import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProcuctoListComponent } from './productos/procucto-list/procucto-list.component';
import { ProductoFilterPipe } from './productos/producto-filter.pipe';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcuctoListComponent,
    ProductoFilterPipe,
    OperasBasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


