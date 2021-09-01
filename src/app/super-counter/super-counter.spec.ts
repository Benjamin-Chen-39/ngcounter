import { SuperCounter } from './super-counter';

describe('SuperCounter', () => {
  it('should create an instance', () => {
    expect(new SuperCounter(1)).toBeTruthy();
  });
 it('should add 3', () => {
let superCounter = new SuperCounter(1);
superCounter.add();
expect(superCounter.value).toEqual(4);
 });
 it ('should subtract 3 when equal to 5', () =>{
let superCounter = new SuperCounter(5)
superCounter.subtract();
expect(superCounter.value).toEqual(2);
 });
 it ('when supercounter is 0 subrtraction should do nothing', () =>{
   let superCounter = new SuperCounter(0)
   superCounter.subtract();
   expect(superCounter.value).toEqual(0);
 });
});
