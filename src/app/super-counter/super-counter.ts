export class SuperCounter {
    public value: number;
    public buttonDisabled: boolean =true;

    constructor(counterTotal: number){
        this.value = counterTotal;
        
    }

  add() {
    this.value += 3;
    this.buttonDisabled = false;
  }
  subtract() {
    if (this.value === 5)
  {this.value -= 3
  
  }
  if (this.value === 3)
  {this.buttonDisabled = true;
    this.value -= 3
  }
}}
