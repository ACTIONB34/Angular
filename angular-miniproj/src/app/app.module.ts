import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovListComponent } from './mov-list/mov-list.component';
import { ShowComponent } from './show/show.component';
import { SeatSelectComponent } from './seat-select/seat-select.component';
import { TicketComponent } from './ticket/ticket.component';
import { ResListComponent } from './res-list/res-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovListComponent,
    ShowComponent,
    SeatSelectComponent,
    TicketComponent,
    ResListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
