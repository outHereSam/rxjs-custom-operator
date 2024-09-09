import { of, toArray } from 'rxjs';
import { multiplyBy } from './custom-operators';

describe('multiplyBy custom operator', () => {
  it('should multiply numeric values by the specified factor', (done) => {
    const factor = 2;
    of(1, 2, 3)
      .pipe(
        multiplyBy(factor),
        toArray() // Collects all emitted values into an array for assertion
      )
      .subscribe({
        next: (result) => {
          expect(result).toEqual([2, 4, 6]);
          done();
        },
        error: (error) => {
          fail('Expected values, but got an error: ' + error);
          done();
        },
      });
  });

  it('should pass through non-numeric values unchanged', (done) => {
    const factor = 2;
    of('a', 'b', 'c')
      .pipe(multiplyBy(factor), toArray())
      .subscribe({
        next: (result) => {
          expect(result).toEqual(['a', 'b', 'c']);
          done();
        },
        error: (error) => {
          fail('Expected values, but got an error: ' + error);
          done();
        },
      });
  });

  it('should handle a factor of zero correctly', (done) => {
    const factor = 0;
    of(1, 2, 3)
      .pipe(multiplyBy(factor), toArray())
      .subscribe({
        next: (result) => {
          expect(result).toEqual([0, 0, 0]);
          done();
        },
        error: (error) => {
          fail('Expected values, but got an error: ' + error);
          done();
        },
      });
  });

  it('should handle negative factors correctly', (done) => {
    const factor = -1;
    of(1, 2, 3)
      .pipe(multiplyBy(factor), toArray())
      .subscribe({
        next: (result) => {
          expect(result).toEqual([-1, -2, -3]);
          done();
        },
        error: (error) => {
          fail('Expected values, but got an error: ' + error);
          done();
        },
      });
  });
});
