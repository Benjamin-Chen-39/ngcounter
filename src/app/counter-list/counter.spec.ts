import { Counter } from "./counter";

describe("Counter", () => {
  let myCounter: Counter;

  beforeEach(() => {
    myCounter = new Counter();
  });

  it("should create an instance", () => {
    expect(new Counter()).toBeTruthy();
  });

  it("should be initialized to zero", () => {
    expect(myCounter.value).toEqual(0);
  });

  it("should increment by one", () => {
    myCounter.increment();
    expect(myCounter.value).toEqual(1);
  });

  it("should decrement by one", () => {
    myCounter.increment();
    myCounter.increment();
    myCounter.decrement();
    expect(myCounter.value).toEqual(1);
  });
});
