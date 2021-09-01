import { Component, OnInit } from "@angular/core";
import { AppCounterComponent } from "../app-counter/app-counter.component";
import { SuperCounterComponent } from "../super-counter/super-counter.component";
@Component({
  selector: "app-counter-list",
  templateUrl: "./counter-list.component.html",
  styleUrls: ["./counter-list.component.css"],
})
export class CounterListComponent implements OnInit {
  public name: string = "counterWall";
  public counters: AppCounterComponent[] = [];
  public SuperCounters: SuperCounterComponent[] = [];

  public create() {
    if (this.counters.length === 3) {
      let sum = 0;
      sum =
        this.counters[0].value +
        this.counters[1].value +
        this.counters[2].value;
      //console.log("the sum is:", sum);
      this.SuperCounters.push(new SuperCounterComponent(sum));
      this.counters = [];
    } else {
      this.counters.push(new AppCounterComponent());
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
