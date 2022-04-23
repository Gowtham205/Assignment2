import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[
    '.blue{color:blue;}',
    '.bold-text{color:red;}',
    '.small-text{color:blue;font-style:italic;}'
  ]
})


export class AppComponent {
  
color:string
backgroundcolor:string
constructor() { 
    this.color = 'black';
    this.backgroundcolor = 'yellow';
  }
  
  

}