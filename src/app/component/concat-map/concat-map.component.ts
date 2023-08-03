import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, concatMapTo, map } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('[concatMapFunc]===========>');
    this.concatMapFunc();
    console.log('[concatMapToFun]===========>');
    this.concatMapToFun();
  }

  /**
   * This is higher order obvervabel
   * It's follow the outer observable sequence
   * untill and unless inner complete it will not take the ourter observable
   * value emits by the outer observable will store in buffer.
   */

  private concatMapFunc() {
    of(1, 2, 3, 4, 5)
      .pipe(
        concatMap((id) => {
          console.log(id);
          return ajax(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(
            map((data) => data.response)
          );
        })
      )
      .subscribe((d) => console.log('[concatMap]', d));
  }

  private concatMapToFun() {
    of(1, 2, 3, 4, 5)
      .pipe(
        concatMapTo(
          ajax(`https://jsonplaceholder.typicode.com/todos/1`).pipe(
            map((d) => d.response)
          )
        )
      )
      .subscribe((d) => console.log('[concatMapTo]', d));
  }
}
