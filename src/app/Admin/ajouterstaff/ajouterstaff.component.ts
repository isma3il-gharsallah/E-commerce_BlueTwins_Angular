import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';  
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-ajouterstaff',
  templateUrl: './ajouterstaff.component.html',
  styleUrls: ['./ajouterstaff.component.css']
})
export class AjouterstaffComponent implements OnInit {
compte;
registerForm: FormGroup;
submitted = false;
  articles=[]; 
  city = [];
  countries = [];
  hashedpassword;

  Newadresse: any;
  adresse: any;
  constructor(private router: Router,private http: HttpClient,private formBuilder: FormBuilder,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      login: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

    this.http.post('http://localhost:8080/state/all'
    
      ,JSON.stringify('')).subscribe((response: any) => {
        this.countries=response; 
        console.log(this.countries);
     });
     this.city = this.countries.filter(x => x.id_state == 1)[0].city;
 
    

  }
  get f() { return this.registerForm.controls; }

  onFormSubmit(event){

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }



    this.hashedpassword = CryptoJS.AES.encrypt(event.target.password.value,event.target.login.value).toString();
     ///compte
    this.http.post('http://localhost:8080/compte/save?login='+event.target.login.value
    +'&password='+this.hashedpassword
    
    ,JSON.stringify('')).subscribe((response: any) => {
     this.compte=response['id_compte'];
     console.log(this.compte);

     ///adresse
     this.http.post('http://localhost:8080/adresse/save?city='+event.target.city.value
    ,JSON.stringify('')).subscribe((response: any) => {
     this.adresse=response['id_adresse'];
     console.log(this.adresse);

     //user
     this.http.post('http://localhost:8080/user/save?nom='+ event.target.nom.value
     +'&prenom='+event.target.prenom.value
     +'&tel='+event.target.tel.value
     +'&privilege=3'
     +'&adresse='+this.adresse
     +'&compte='+this.compte
         
    ,JSON.stringify('')).subscribe((response1: any) => {
    
       this.router.navigate(['/espace_admin/compte/lister']);
     
  
  
  });
    });
    });
  


  
  }
  onChangeState(deviceValue) {
    this.city = this.countries.filter(x => x.id_state == deviceValue)[0].city;
    console.log(this.city)
  }
}
