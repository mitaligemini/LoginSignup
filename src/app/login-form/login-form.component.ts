import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private router: Router,
   
    ) { }
  myForm!: FormGroup ;

  onSubmit(form: FormGroup) {

    if(this.myForm.value.username in localStorage && this.myForm.value.pwd in localStorage){
      alert("account verified")
      form.reset();
    }
    else{
      alert("Try again!!!!.. Credentials not matched. Signup for the account and If already created see the below table for the valid credentials and use it for login")
    }




    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.username);
    console.log('pass', form.value.pwd);

  }

  ngOnInit(): void {
  
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  redirect(){
    this.router.navigateByUrl('signup');
  }
  

}
