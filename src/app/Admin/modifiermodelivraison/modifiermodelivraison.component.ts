import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-modifiermodelivraison',
  templateUrl: './modifiermodelivraison.component.html',
  styleUrls: ['./modifiermodelivraison.component.css']
})
export class ModifiermodelivraisonComponent implements OnInit {

  modes:any[];
  Id;
  registerForm: FormGroup;
  submitted = false;

  constructor(private http: HttpClient,private route: ActivatedRoute, private formBuilder: FormBuilder ,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      lib_mod_liv: ['', Validators.required],
     

  });
    this.Id = this.route.snapshot.paramMap.get("id");

    this.http.post('http://localhost:8080/modelivraison/getmodelivraison?id='+this.Id,JSON.stringify('')).subscribe((response: any) => {
   this.modes=response;
   console.log(response);
  });
}
  onFormSubmit(event: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.http.post('http://localhost:8080/modelivraison/update?id_modeliv='+event.target.id2.value
    +'&lib_mod_liv='+event.target.lib_mod_liv.value
    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/espace_admin/modelivraison/lister']);
   });
   
  }
}
