import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-ajoutertaille',
  templateUrl: './ajoutertaille.component.html',
  styleUrls: ['./ajoutertaille.component.css']
})
export class AjoutertailleComponent implements OnInit {
  categories=[];
  registerForm: FormGroup;
  submitted = false;
  constructor(private http: HttpClient,private router: Router,private formBuilder: FormBuilder,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    }
  }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      lib_taille: ['', Validators.required],
      categorie_lib:['', Validators.required]

  });
  this.http.post('http://localhost:8080/categorie/all',JSON.stringify('')).subscribe((response: any) => {
    this.categories=response;
        console.log(this.categories);
  });


  }


  onFormSubmit(event: any) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    } 
  this.http.post('http://localhost:8080/taille/save?lib_taille='+event.target.lib_taille.value
  +'&categorie='+event.target.categorie_lib.value
  ,JSON.stringify('')).subscribe((response: any) => {
    console.log(response);
    this.router.navigate(['/espace_admin/taille/lister']);
  });

}


}
