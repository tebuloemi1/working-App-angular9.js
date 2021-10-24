import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradesComponent } from './grades/grades.component';
import { DivComponent } from './div/div.component';

@NgModule({
  declarations: [
    AppComponent,
    GradesComponent,
    DivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
