import { BehaviorSubject, Observable } from "rxjs";

export class Store<T> {
  private value$: BehaviorSubject<T>;

  valueChange$: Observable<T>;

  constructor(initialState: T) {
    this.value$ = new BehaviorSubject<T>(initialState);
    this.valueChange$ = this.value$.asObservable();
    this.update(initialState);
  }

  update(state: T) {
    this.value$.next({ ...state });
  }

  get() {
    return this.value$.getValue();
  }
}
