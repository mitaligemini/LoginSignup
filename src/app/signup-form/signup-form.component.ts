import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  signupForm!: FormGroup ;
  myform!:FormGroup

  onSubmit(form: FormGroup) {
    this.myform=form;
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.username);
    console.log('pass', form.value.pwd);
    localStorage.setItem(form.value.username, form.value.username );
    localStorage.setItem(form.value.pwd, form.value.pwd);
    localStorage.setItem(form.value.email,form.value.email);
    localStorage.setItem(form.value.fname,form.value.fname);
    localStorage.setItem(form.value.phone,form.value.phone);

    alert("Account created");
    this.addDetailsToTable();
    form.reset();
  }
  counter=1;
  addDetailsToTable = () => {
    var table = document.getElementById("table-body");
    let data = document.createElement("tr");
   
    data.innerHTML = `<tr>
      <td>${this.counter}</td>
      <td>${localStorage.getItem(this.myform.value.username)}</td>
      <td>${localStorage.getItem(this.myform.value.email)}</td>
      <td>${localStorage.getItem(this.myform.value.phone)}</td>
      <td>${localStorage.getItem(this.myform.value.fname)}</td>
      <td>${localStorage.getItem(this.myform.value.pwd)}</td>
     
    </tr>`;
    table!.append(data);
    this.counter++; 
  };



  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      fname:  ['', Validators.required , Validators.pattern('[a-zA-Z ]*')],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
    });

}}
