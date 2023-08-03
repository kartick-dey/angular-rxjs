import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.deafultObservable();
    this.subjectAsDataProvider();
    this.subjectAsDataConsumer();
  }

  /**
   * By default observables are unicast means it will emits different value
   * for different observer, it used to create a separate context for each
   * observer
   */
  private deafultObservable() {
    const observable$ = new Observable((obj) => obj.next(Math.random()));

    // Subscriber 1
    observable$.subscribe((d) =>
      console.log('[deafultObservable] Subscriber 1 =>', d)
    );

    // Subscriber 2
    observable$.subscribe((d) =>
      console.log('[deafultObservable] Subscriber 2 =>', d)
    );
  }

  /**
   * Subject is special type of observable
   * It is muticusting means it's emits same value to all observer
   * It's work like a event emitter
   * Instead of creating separate context, it will register all the listerns
   * It will act as data provider as well data consumer
   * It will help to convert from unicast to muticast
   */
  private subjectAsDataProvider() {
    const subject$ = new Subject();

    // Subscriber 1
    subject$.subscribe((d) =>
      console.log('[subjectAsDataProvider] Subscriber 1 =>', d)
    );

    // Subscriber 2
    subject$.subscribe((d) =>
      console.log('[subjectAsDataProvider] Subscriber 2 =>', d)
    );

    subject$.next(Math.random());
  }

  private subjectAsDataConsumer() {
    const subject$ = new Subject();

    const api = ajax('https://jsonplaceholder.typicode.com/todos/1').pipe(
      map((d) => d.response)
    );

    subject$.subscribe((d) => console.log(d));
    subject$.subscribe((d) => console.log(d));

    const result = api.subscribe(subject$);
  }
}
