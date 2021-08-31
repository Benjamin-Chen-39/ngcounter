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

  it("should expect create function to push a new counter", () => {
    component.create();
    expect(component.counters.length).toEqual(1);
  });
});
