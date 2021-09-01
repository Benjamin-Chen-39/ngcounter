export class SuperCounter {
    public value: number;
    constructor(counterTotal: number){
        this.value = counterTotal;
        
    }

  add() {
    this.value += 3;
  }
  subtract() {
    if (this.value === 5)
  {this.value -= 3}
}}
