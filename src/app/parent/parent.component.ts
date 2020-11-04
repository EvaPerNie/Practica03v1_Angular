import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  cambiaColor(color: string){
    document.getElementById('hijo').setAttribute('class',color);
  }

  ngOnInit(): void {
  }

}
