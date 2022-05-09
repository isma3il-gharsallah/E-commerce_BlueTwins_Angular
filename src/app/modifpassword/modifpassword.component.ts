import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import * as CryptoJS from 'crypto-js';  

@Component({
  selector: 'app-modifpassword',
  templateUrl: './modifpassword.component.html',
  styleUrls: ['./modifpassword.component.css']
})
export class ModifpasswordComponent implements OnInit {
user;
idcompte;
login;
oldmdp;
newmdp;
message;
success;
  constructor(private router: Router,private http: HttpClient,private formBuilder: FormBuilder) { 
  }
  ngOnInit() {
    if(!sessionStorage.getItem("user"))
    {
      this.router.navigate(['/compte/register/connexion']);
    }
  }

  onFormSubmit(event: any){
    this.http.post('http://localhost:8080/user/get?id='+sessionStorage.getItem("user")
    ,JSON.stringify('')).subscribe((response: any) => {
      this.user=response;
      this.idcompte=response['compte']['id_compte'];
      this.oldmdp=response['compte']['password'];
      this.login=response['compte']['login'];
      this.oldmdp=CryptoJS.AES.decrypt(this.oldmdp,this.login).toString(CryptoJS.enc.Utf8); 
     console.log(this.user.compte.login+'/'+this.oldmdp)


    
       if (event.target.mot.value==this.oldmdp)
      {
        // console.log(event.target.mot.value+'='+this.oldmdp);
          if (event.target.mot1.value.length>7  &&event.target.mot1.value===event.target.mot2.value)
          {
   
/////////////////////////////
this.newmdp= CryptoJS.AES.encrypt(event.target.mot1.value.trim(),this.login.trim()).toString();
var hashedpassword2;
for(var i=0;i<this.newmdp.length;i++){
  if(this.newmdp[i]==' '){
    hashedpassword2=hashedpassword2+'+';
  }
  else{
    hashedpassword2=hashedpassword2+this.newmdp[i];
  }
}
this.http.post('http://localhost:8080/compte/update?id_compte='+this.idcompte
+'&login='+this.login
+'&password='+this.newmdp,
JSON.stringify('')).subscribe((response: any) => {
  console.log(response);
  this.success='Votre mot de passe à été modifier.';

 });
          /////////////////////////////
       
          }
          else{
            this.message='Votre mot de passe doit comporter un minimum de 8 caractères, se composer de chiffres et de lettres et comprendre des majuscules/minuscules ou des caractères spéciaux.'
            this.success=false;

          }
        }
        else{
          this.message='Mot de passe ancien incorrect'
          this.success=false;
        }
              });

      }

  }


