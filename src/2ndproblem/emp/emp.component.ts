import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input() name : string="";

}
