import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function multiplyBy<T>(factor: number) {
  return (source: Observable<T>): Observable<T> => {
    return source.pipe(
      map((value: T) => {
        if (typeof value === 'number' && typeof factor === 'number') {
          return (value * factor) as unknown as T; // Casting for demonstration
        } else {
          // Handle non-numeric values
          return value;
        }
      })
    );
  };
}
