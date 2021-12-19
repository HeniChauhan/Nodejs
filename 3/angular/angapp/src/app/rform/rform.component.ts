import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  angForm:FormGroup;
  constructor() { 
    this.angForm= new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      contactNo:new FormControl('',[Validators.required]),
      age:new FormControl('',[Validators.required,Validators.min(18)]),
      dob:new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  OnSubmit():void{
    console.log(this.angForm.value);
    alert("Name: "+ this.angForm.value.name + " Email: " + this.angForm.value.email + " contact Number:  " + this.angForm.value.contactNo +  " Age: " + this.angForm.value.age + " DOB: "+ this.angForm.value.dob);
    // alert(this.angForm.value.name);
    // alert(this.angForm.value.email);
    // alert(this.angForm.value.contactNo);
    // alert(this.angForm.value.age);
    // alert(this.angForm.value.dob);
  }
}
