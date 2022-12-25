import { Component } from '@angular/core';
import { Router } from '@angular/router';import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerForm:any = FormGroup;
  submitted = false;
  login:any;
  date=new Date();
  movies=[
    {title:"rrr",director:"rajamouli"},
    {title:"kgf",director:"prashanth"},
    {title:"robo",director:"shankar"}
  ]

constructor(private router: Router, private formBuilder: FormBuilder){

}
navigate(){
  this.router.navigateByUrl('/homepage');

}
onSubmit() {

  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted)
  {
    this.router.navigateByUrl('/homepage');
    // alert("Great!!");
  }

}
ngOnInit() {
  //Add User form validations
  this.registerForm = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required]]
  });
  this.login="Welcome back!";

}

get f() { return this.registerForm.controls; }
}
