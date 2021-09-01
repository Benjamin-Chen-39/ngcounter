import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppCounterComponent } from "./app-counter.component";

describe("AppCounterComponent", () => {
  let component: AppCounterComponent;
  let fixture: ComponentFixture<AppCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should have a counter class", () => {
    expect(component.ourCounter.value).toEqual(0);
  });

  it("add button should increase counter value", () => {
    const ourHTML = fixture.nativeElement;
    const addButtonEl = fixture.nativeElement.querySelector("#addButton");
    const el = ourHTML.querySelector("h3");
    addButtonEl.click();
    fixture.detectChanges();
    expect(el.textContent).toEqual("1");
  });

  it("subtract button should decrease counter value", () => {
    const ourHTML = fixture.nativeElement;
    const subButtonEl = fixture.nativeElement.querySelector("#subButton");
    const el = ourHTML.querySelector("h3");
    subButtonEl.click();
    fixture.detectChanges();
    expect(el.textContent).toEqual("0");
  });
  it ('disable button when equal to zero', () =>{
    const ourHTML = fixture.nativeElement;
    const subButtonEl = fixture.nativeElement.querySelector("#subButton");
    expect(subButtonEl.disabled).toEqual(true);
    });
});
