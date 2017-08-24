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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'program', component: ProgramComponent, children: [
    { path: 'overview', component: OverviewComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'replications', component: ReplicationsComponent },
    { path: 'fathers', component: FathersComponent },
    { path: 'literacy', component: LiteracyComponent },
    { path: 'international', component: InternationalComponent },
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
