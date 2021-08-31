import { Button } from "protractor";

export class Counter {
  public value: number = 0;

  increment() {
    this.value += 1;
  }
  decrement() {
    this.value -= 1;
  }
}
