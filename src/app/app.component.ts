import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { multiplyBy } from './operators/custom-operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'rxjs-operator';
  source$: Observable<number | string> = from([1, 2, 3, 'star', 'fruit']);
  data: (number | string)[] = [];

  ngOnInit() {
    this.source$.pipe(multiplyBy(3)).subscribe({
      next: (value) => this.data.push(value),
      error: (error) => console.log(error),
      complete: () => console.log('Completed'),
    });
  }
}
