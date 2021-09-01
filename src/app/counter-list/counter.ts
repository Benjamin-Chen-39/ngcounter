import { Button } from "protractor";

export class Counter {
  public value: number = 0;

  add() {
    this.value += 1;
  }
  subtract() {
    this.value -= 1;
  }
}
