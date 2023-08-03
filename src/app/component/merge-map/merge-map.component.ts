import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, mergeMapTo } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('[mergeMapFunc]===========>');
    this.mergeMapFunc();
    console.log('[mergeMapFunc]===========>');
    this.mergeMapToFunc();
  }

  /**
   * It is a higher order observable which will return a observable
   * It doesn't follow the order of outer function emits value
   * It will just call when ever any oberservable resolved it will print that
   */

  private mergeMapFunc() {
    try {
      of(1, 2, 3, 4, 5)
        .pipe(
          mergeMap(
            (id) => {
              console.log('id:', id);
              return ajax(`https://jsonplaceholder.typicode.com/todos/${id}`);
            },
            // this is deprecated in newer version of rxjs
            (outerValue, innerValue, outerIdx, innerIdx) => {
              return innerValue.response;
            },
            2
          )
        )
        .subscribe((data) => console.log('[mergeMapFunc]', data));
    } catch (error) {
      console.error(error);
    }
  }

  private mergeMapToFunc() {
    of(1, 2, 3, 4, 5)
      .pipe(
        mergeMapTo(
          ajax(`https://jsonplaceholder.typicode.com/todos/1`).pipe(
            map((d) => d.response)
          )
        )
      )
      .subscribe((data) => console.log('[mergeMapToFunc]', data));
  }
}
