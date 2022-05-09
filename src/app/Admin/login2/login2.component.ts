import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';  

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  Id;
hashedpassword;
conversionDecryptOutput;
incorrecte=false;
  constructor(private route: ActivatedRoute ,private http: HttpClient,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
       
      username: ['', [Validators.required, Validators.minLength(8), ]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

  }
  get f() { return this.registerForm.controls; }
  onSubmit(event){

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

      this.conversionDecryptOutput='false';
    this.http.post('http://localhost:8080/admin/get?userName='+event.target.userName.value,
    JSON.stringify('')).subscribe((response: any) => {
      if(response){
    console.log(response['password'].trim());
    this.router.navigate(['*']);   }});
}}
