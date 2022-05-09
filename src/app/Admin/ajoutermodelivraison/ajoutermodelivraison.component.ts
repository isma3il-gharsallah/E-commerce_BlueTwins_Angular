import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-ajoutermodelivraison',
  templateUrl: './ajoutermodelivraison.component.html',
  styleUrls: ['./ajoutermodelivraison.component.css']
})
export class AjoutermodelivraisonComponent implements OnInit {

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
      lib_mod_liv: ['', Validators.required],
     

  });

  }


  onFormSubmit(event: any) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

  this.http.post('http://localhost:8080/modelivraison/save?lib_mod_liv='+event.target.lib_mod_liv.value ,JSON.stringify('')).subscribe((response: any) => {
    console.log(response);
    this.router.navigate(['/espace_admin/modelivraison/lister']);

  });

}
}
