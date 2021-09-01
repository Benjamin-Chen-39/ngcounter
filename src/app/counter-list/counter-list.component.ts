import { Component, OnInit } from "@angular/core";
import { Counter } from "./counter";

@Component({
  selector: "app-counter-list",
  templateUrl: "./counter-list.component.html",
  styleUrls: ["./counter-list.component.css"],
})
export class CounterListComponent implements OnInit {
  public name: string = "counterWall";
  public counters: Counter[] = [];

  public create() {
    this.counters.push(new Counter);

    
  }

  constructor() {}
  ngOnInit(): void {}
}
