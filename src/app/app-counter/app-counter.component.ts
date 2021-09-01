import { Component, OnInit } from "@angular/core";
import { Counter } from "../counter-list/counter";

@Component({
  selector: "app-app-counter",
  templateUrl: "./app-counter.component.html",
  styleUrls: ["./app-counter.component.css"],
})
export class AppCounterComponent implements OnInit {
  public ourCounter: Counter = new Counter();
  constructor() {}
 
  ngOnInit(): void {}
}
