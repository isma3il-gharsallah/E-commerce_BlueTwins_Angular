import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-modifierprivilege',
  templateUrl: './modifierprivilege.component.html',
  styleUrls: ['./modifierprivilege.component.css']
})
export class ModifierprivilegeComponent implements OnInit {
  privilege:any[];
  Id;
  registerForm: FormGroup;
  submitted = false;

  constructor(private http: HttpClient,private route: ActivatedRoute  ,private formBuilder: FormBuilder,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      lib_privilege: ['', Validators.required],
     

  });

    this.Id = this.route.snapshot.paramMap.get("id");

    this.http.post('http://localhost:8080/privilege/getprivilege?id='+this.Id,JSON.stringify('')).subscribe((response: any) => {
   this.privilege=response;
   console.log(response);
  });
}
  onFormSubmit(event: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.http.post('http://localhost:8080/privilege/update?id_privilege='+event.target.id2.value
    +'&lib_privilege='+event.target.lib_privilege.value
    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/espace_admin/privilege/lister']);
   });
   
  }
}
