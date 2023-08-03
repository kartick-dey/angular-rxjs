import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.switchMapFun();
  }

  /**
   * This is higher order observable
   * It will projected latest emited values from inner function
   */
  private switchMapFun() {
    of(1, 2, 3, 4, 5)
      .pipe(
        switchMap((id) => {
          console.log(id);
          return ajax(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(
            map((data) => data.response)
          );
        })
      )
      .subscribe((data) => console.log(data));
  }
}
