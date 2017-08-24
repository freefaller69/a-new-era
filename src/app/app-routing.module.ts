import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'program', component: ProgramComponent, children: [
    { path: 'overview', component: OverviewComponent },
    { path: 'history', component: HistoryComponent, children: [
      { path: 'beginnings', component: BeginningsComponent },
      { path: 'models', component: ModelsComponent },
      { path: 'preschool', component: PreschoolComponent },
      { path: 'chdd', component: ChddComponent },
      { path: 'saut', component: SautComponent },
     ] },
    { path: 'replications', component: ReplicationsComponent, children: [
      { path: 'firstreplication', component: FirstreplicationComponent },
      { path: 'prideschool', component: PrideschoolComponent },
      { path: 'kids', component: KidsComponent },
    ] },
    { path: 'fathers', component: FathersComponent, children: [
      { path: 'sefambg', component: SefambgComponent },
      { path: 'meyerschell', component: MeyerschellComponent },
      { path: 'fathersstory', component: FathersstoryComponent },
      { path: 'sibstories', component: SibstoriesComponent },
    ] },
    { path: 'literacy', component: LiteracyComponent, children: [
      { path: 'recollections', component: RecollectionsComponent },
      { path: 'chicago', component: ChicagoComponent },
      { path: 'irvine', component: IrvineComponent },
      { path: 'sooregon', component: SooregonComponent },
    ] },
    { path: 'international', component: InternationalComponent, children: [
      { path: 'australia', component: AustraliaComponent },
      { path: 'saudiarabia', component: SaudiarabiaComponent },
      { path: 'spain', component: SpainComponent },
    ] },
    ] },
  {
    path: 'students', component: StudentsComponent, children: [
      // { path: ':id', component: StudentDetailComponent }
    ]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
