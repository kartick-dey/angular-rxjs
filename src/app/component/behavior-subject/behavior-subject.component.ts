import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss'],
})
export class BehaviorSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.behaviorSubjectFun();
  }

  /**
   * behavior subject holds one value, we have to initialize with some value while creating 
   * behavior subject, when it is subscribed it emits an value immediately
   * but subject doesn't hold any initial value
   * In behavior subject subscriber will always gets the value it could be the initialize value
   * or last emited value
   */
  private behaviorSubjectFun() {
    const behaviorSubject$ = new BehaviorSubject<number>(100);
    
    behaviorSubject$.subscribe(d => console.log(d));

    behaviorSubject$.next(200);

    behaviorSubject$.subscribe(d => console.log(d));
  }
}
