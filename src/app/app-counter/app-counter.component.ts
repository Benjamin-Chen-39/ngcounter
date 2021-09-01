import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-app-counter",
  templateUrl: "./app-counter.component.html",
  styleUrls: ["./app-counter.component.css"],
})
export class AppCounterComponent implements OnInit {
  public value: number = 0;
  public buttonDisabled: boolean = true;

  add() {
    this.value += 1;
    this.buttonDisabled = false;
  }
  subtract() {
    if (this.value === 1)
    {this.buttonDisabled = true;
    this.value -=1;  
    }

    if (this.value === 0)
  {this.buttonDisabled = true;
    return;
  }
  else {
  this.value -=1;}
  this.buttonDisabled = false;
}
  constructor() {}
 
  ngOnInit(): void {}
}
