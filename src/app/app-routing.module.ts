import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergeMapComponent } from './component/merge-map/merge-map.component';
import { ConcatMapComponent } from './component/concat-map/concat-map.component';
import { ExhaustMapComponent } from './component/exhaust-map/exhaust-map.component';
import { SwitchMapComponent } from './component/switch-map/switch-map.component';
import { SubjectComponent } from './component/subject/subject.component';
import { BehaviorSubjectComponent } from './component/behavior-subject/behavior-subject.component';

const routes: Routes = [
  { path: '', redirectTo: 'merge-map', pathMatch: 'full' },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'exhaust-map', component: ExhaustMapComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behavior', component: BehaviorSubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
