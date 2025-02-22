import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CounterListComponent } from "./counter-list/counter-list.component";
import { AppCounterComponent } from "./app-counter/app-counter.component";
import { SuperCounterComponent } from './super-counter/super-counter.component';

@NgModule({
  declarations: [AppComponent, CounterListComponent, AppCounterComponent, SuperCounterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
