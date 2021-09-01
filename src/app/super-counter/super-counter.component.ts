import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-super-counter",
  templateUrl: "./super-counter.component.html",
  styleUrls: ["./super-counter.component.css"],
})
export class SuperCounterComponent implements OnInit {
  @Input() value: number = 0;
  public buttonDisabled: boolean = true;

  constructor(counterTotal: number) {
    this.value = counterTotal;
  }
  add() {
    this.value += 3;
    this.buttonDisabled = false;
  }
  subtract() {
    if (this.value === 5) {
      this.value -= 3;
    }
    if (this.value === 3) {
      this.buttonDisabled = true;
      this.value -= 3;
    }
  }

  ngOnInit(): void {}
}
