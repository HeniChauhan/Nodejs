import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  colors=['red','white','black','orange'];
  selected = "----";
  
  update(e : any){
    this.selected = e.target.value
  }
  constructor() { }

  ngOnInit(): void {
  }

}
