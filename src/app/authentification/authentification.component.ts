import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private route: ActivatedRoute ,private http: HttpClient,private router: Router,private formBuilder: FormBuilder) { }
  registerForm: FormGroup;
  submitted = false;

  Id;
hashedpassword;
conversionDecryptOutput;
incorrecte=false;
Mail_exist=false;
id_user;
  ngOnInit() {
    if(sessionStorage.getItem("user"))
    {
      this.router.navigate(['/profil']);

    }


    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

  }

  get f() { return this.registerForm.controls; }

  onFormSubmit(event: any) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

     
    this.hashedpassword = CryptoJS.AES.encrypt(event.target.password2.value.trim(),event.target.login2.value.trim()).toString();
    var hashedpassword2='';
    for(var i=0;i<this.hashedpassword.length;i++){
      if(this.hashedpassword[i]=='  '){
        hashedpassword2=hashedpassword2+'+';
      }
      else{
        hashedpassword2=hashedpassword2+this.hashedpassword[i];
      }
    }
    this.http.post('http://localhost:8080/compte/save?login='+event.target.login2.value 
    +'&password='+hashedpassword2,
    JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      if(response!=null){
      this.Id=response.id_compte;
      this.AjouterUser(event);
      }
      else{
        this.Mail_exist=true;
      }
    });
    
  }

  AjouterUser(event){
    
    console.log(event.target.nom.value);
    this.http.post('http://localhost:8080/user/save?compte='+this.Id
      +'&nom='+event.target.nom.value
      +'&prenom='+event.target.prenom.value
      +'&tel='+event.target.tel.value
      +'&privilege=2',
      JSON.stringify('')).subscribe((response: any) => {
        console.log(response);
        this.id_user=response['id_user'];
        this.Connexion();

     }); 
    
    };
    onAuthentifier(event){
      this.conversionDecryptOutput='false';
      this.http.post('http://localhost:8080/user/getlogin?login='+event.target.login1.value,
      JSON.stringify('')).subscribe((response: any) => {
        if(response){
      console.log(response['password'].trim());
        this.conversionDecryptOutput = CryptoJS.AES.decrypt(response['password'],response['login']).toString(CryptoJS.enc.Utf8);  
        console.log(this.conversionDecryptOutput);
        if(this.conversionDecryptOutput){
        if(this.conversionDecryptOutput===event.target.password1.value){
          console.log(this.conversionDecryptOutput+'='+event.target.password1.value);
          this.http.post('http://localhost:8080/user_Compte?id='+response['id_compte']
          ,JSON.stringify('')).subscribe((response: any) => {
            this.id_user=response['id_user'];
             this.Connexion();
          }); 
        }
         else{
          this.incorrecte=true;
         }
        }
        else{
          this.incorrecte=true;
         }
        }
        else{
          this.incorrecte=true;
         }
     });
   
     
   
    }
    Connexion(){
      sessionStorage.setItem('user', JSON.stringify(this.id_user));

      if(this.route.snapshot.paramMap.get("connexion")=='connexion'){
        this.router.navigate(['/profil']);

      }
      else{
        this.router.navigate(['/livraison']);
      }      
    }
}
