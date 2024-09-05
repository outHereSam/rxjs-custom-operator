import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, of } from 'rxjs';
import { multiplyBy } from './operators/custom-operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'rxjs-operator';
  numbersArr = [1, 2, 3, 'star', 'fruit'];
  source$ = of(...this.numbersArr);

  ngOnInit() {
    this.source$.pipe(multiplyBy(3)).subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log('Completed'),
    });
  }
}
