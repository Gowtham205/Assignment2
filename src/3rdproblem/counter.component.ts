import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  styles: [`
    .counter {
      position: relative;
    }
    input {
      border: 0;
      border-radius: 3px;
      height: 30px;
      max-width: 100px;
      text-align: center;
      border: 2px solid #009826;
    }
    button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
  `],
  templateUrl: './app.countercomponent.html'
})
export class CounterComponent {

  @Input()
  count: number = 0;

  @Input()
  maxcount : number =15;

  @Input()
  mincount:number=0;

  increment() {
    if(this.count<this.maxcount){
    this.count++;
    }
  }
  
  decrement() {
    if(this.count>this.mincount){
      this.count--;
    }
  }
  
}