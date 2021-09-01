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
    myCounter.add();
    expect(myCounter.value).toEqual(1);
  });

  it("should decrement by one", () => {
    myCounter.add();
    myCounter.add();
    myCounter.subtract();
    expect(myCounter.value).toEqual(1);
  });
});
