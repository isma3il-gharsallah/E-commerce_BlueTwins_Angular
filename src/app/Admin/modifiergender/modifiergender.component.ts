import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-modifiergender',
  templateUrl: './modifiergender.component.html',
  styleUrls: ['./modifiergender.component.css']
})
export class ModifiergenderComponent implements OnInit {
  gender:any[];
  Id;
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private http: HttpClient,private route: ActivatedRoute ,private formBuilder: FormBuilder ,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }
  get f() { return this.registerForm.controls; }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      gender_lib: ['', Validators.required],
     

  });
    this.Id = this.route.snapshot.paramMap.get("id");

    this.http.post('http://localhost:8080/gender/getgender?id='+this.Id,JSON.stringify('')).subscribe((response: any) => {
   this.gender=response;
   console.log(response);
  });
}
  onFormSubmit(event: any) {
   
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.http.post('http://localhost:8080/gender/update?id_gender='+event.target.id2.value
    +'&gender_lib='+event.target.gender_lib.value
    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/espace_admin/gender/lister']);
   });
   
  }
}
