import { Component, OnInit } from "@angular/core";
import { Counter } from "./counter";
import { SuperCounter } from "../super-counter/super-counter";
import { threadId } from "node:worker_threads";
@Component({
  selector: "app-counter-list",
  templateUrl: "./counter-list.component.html",
  styleUrls: ["./counter-list.component.css"],
})
export class CounterListComponent implements OnInit {
  public name: string = "counterWall";
  public counters: Counter[] = [];
  public SuperCounters: SuperCounter[] = [];

  public create() {
    if (this.counters.length === 3)
   { this.SuperCounters.push(new SuperCounter(this.counters[0].value + this.counters[1].value + this.counters[2].value))
    this.counters = [];
   }
   else {this.counters.push(new Counter);}
  }

  constructor() {}
  ngOnInit(): void {}
}
