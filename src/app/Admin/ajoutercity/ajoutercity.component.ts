import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-ajoutercity',
  templateUrl: './ajoutercity.component.html',
  styleUrls: ['./ajoutercity.component.css']
})
export class AjoutercityComponent implements OnInit {
  states:any[];
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
      lib_city: ['', Validators.required],
      zip_code: ['', Validators.required,Validators.minLength(4)],


  });
    this.http.post('http://localhost:8080/state/all',JSON.stringify('')).subscribe((response: any) => {
      this.states=response;
          console.log(this.states);
 
    });
  }

  onFormSubmit(event: any) {
 
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

    this.http.post('http://localhost:8080/city/save?lib_city='+event.target.lib_city.value
    +'&zip_code='+event.target.zip_code.value
    
    +'&state='+event.target.state.value
    
    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      
      this.router.navigate(['/espace_admin/article/lister']);
 
   });}

}
