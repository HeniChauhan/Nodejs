import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  s1:string = "Welcome to angular app";
  i1:Number=1;
  date:number=Date.now();
  constructor(){
    
  }

  ngOnInit(): void {
  }

}
