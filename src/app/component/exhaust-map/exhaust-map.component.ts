import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss'],
})
export class ExhaustMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('[exhaustMapFun]===========>');
    this.exhaustMapFun();
  }

  /**
   * This is anoter higher order observable
   * This is take value from outer obsevable untill and unless the inner observable is completed
   * till then it will ignore all values emitted by outer observale will be ignored
   * beause it's doesn't store outer observable values in buffer like concapMap
   */
  private exhaustMapFun() {
    of(1, 2, 3, 4, 5)
      .pipe(
        exhaustMap((id) => {
          console.log(id);
          return ajax(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(
            map((data) => data.response)
          );
        })
      )
      .subscribe((data) => console.log('[exhaustMapFun]', data));
  }
}
