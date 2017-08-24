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
import { BeginningsComponent } from './program/history/beginnings/beginnings.component';
import { ModelsComponent } from './program/history/models/models.component';
import { PreschoolComponent } from './program/history/preschool/preschool.component';
import { ChddComponent } from './program/history/chdd/chdd.component';
import { SautComponent } from './program/history/saut/saut.component';
import { FirstreplicationComponent } from './program/replications/firstreplication/firstreplication.component';
import { PrideschoolComponent } from './program/replications/prideschool/prideschool.component';
import { KidsComponent } from './program/replications/kids/kids.component';
import { SefambgComponent } from './program/fathers/sefambg/sefambg.component';
import { MeyerschellComponent } from './program/fathers/meyerschell/meyerschell.component';
import { FathersstoryComponent } from './program/fathers/fathersstory/fathersstory.component';
import { SibstoriesComponent } from './program/fathers/sibstories/sibstories.component';
import { RecollectionsComponent } from './program/literacy/recollections/recollections.component';
import { ChicagoComponent } from './program/literacy/chicago/chicago.component';
import { IrvineComponent } from './program/literacy/irvine/irvine.component';
import { SooregonComponent } from './program/literacy/sooregon/sooregon.component';
import { AustraliaComponent } from './program/international/australia/australia.component';
import { SaudiarabiaComponent } from './program/international/saudiarabia/saudiarabia.component';
import { SpainComponent } from './program/international/spain/spain.component';

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
    OverviewComponent,
    BeginningsComponent,
    ModelsComponent,
    PreschoolComponent,
    ChddComponent,
    SautComponent,
    FirstreplicationComponent,
    PrideschoolComponent,
    KidsComponent,
    SefambgComponent,
    MeyerschellComponent,
    FathersstoryComponent,
    SibstoriesComponent,
    RecollectionsComponent,
    ChicagoComponent,
    IrvineComponent,
    SooregonComponent,
    AustraliaComponent,
    SaudiarabiaComponent,
    SpainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
