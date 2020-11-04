import { Component, OnInit, Input } from '@angular/core';
import { by } from 'protractor';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //@Input ('click') class : any;

  constructor() { }

  ngOnInit(): void {
  }

}
