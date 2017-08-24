import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ProgramComponent } from './program/program.component';
import { StudentsComponent } from './students/students.component';
import { HistoryComponent } from './program/history/history.component';
import { ReplicationsComponent } from './program/replications/replications.component';
import { FathersComponent } from './program/fathers/fathers.component';
import { LiteracyComponent } from './program/literacy/literacy.component';
import { InternationalComponent } from './program/international/international.component';
import { OverviewComponent } from './program/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    ProgramComponent,
    StudentsComponent,
    HistoryComponent,
    ReplicationsComponent,
    FathersComponent,
    LiteracyComponent,
    InternationalComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
