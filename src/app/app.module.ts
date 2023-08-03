import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MergeMapComponent } from './component/merge-map/merge-map.component';
import { ConcatMapComponent } from './component/concat-map/concat-map.component';
import { ExhaustMapComponent } from './component/exhaust-map/exhaust-map.component';
import { SwitchMapComponent } from './component/switch-map/switch-map.component';
import { SubjectComponent } from './component/subject/subject.component';
import { BehaviorSubjectComponent } from './component/behavior-subject/behavior-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    SwitchMapComponent,
    SubjectComponent,
    BehaviorSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
