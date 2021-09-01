import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CounterListComponent } from "./counter-list.component";

describe("CounterListComponent", () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    //contains full component, including template (HTML)
    fixture = TestBed.createComponent(CounterListComponent);
    //just the  CounterListComponent class
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  it("should intialize empty counter list", () => {
    expect(component.counters.length).toEqual(0);
  });

  it("should expect create function to create a new counter", () => {
    component.create();
    expect(component.counters.length).toEqual(1);
  });

  it("should expect click button to create new counters", () => {
    const ourHTML = fixture.nativeElement;
    const createButton = fixture.nativeElement.querySelector("Button");
    createButton.click();
    createButton.click();
    createButton.click();
    fixture.detectChanges();
    expect(component.counters.length).toEqual(3);
  });
});
