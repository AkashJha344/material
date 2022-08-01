import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      { 
        email : new FormControl ('', [Validators.required, Validators.email]),
        password : new FormControl ('', [Validators.required, Validators.minLength(5)])
    })
  }
  login(){
    let data = 	this.loginForm.value;
    if(this.loginForm.valid){
      this.http.post('https://reqres.in/api/login', data).subscribe( (response:any) => {
        console.log('res', response)
        if(response && response.token){
          localStorage.setItem('loggedUser', response.token);
          this.route.navigate(['users/userstable'])

        }
      },
      error => {
        console.log('err',error)
      })
    }

  }
  
  get email() {
    return this.loginForm.get('email');
  }
  get password()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      {
    return this.loginForm.get('email');
  }

}
