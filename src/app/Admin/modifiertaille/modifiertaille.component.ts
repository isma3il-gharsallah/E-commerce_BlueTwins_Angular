import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-modifiertaille',
  templateUrl: './modifiertaille.component.html',
  styleUrls: ['./modifiertaille.component.css']
})
export class ModifiertailleComponent implements OnInit {
  taille:any[];
  categories=[];
  Id;
  registerForm: FormGroup;
  submitted = false;
  constructor(private http: HttpClient,private route: ActivatedRoute, private formBuilder: FormBuilder,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      lib_taille: ['', Validators.required],
      categorie_lib:['', Validators.required]

  });

    this.Id = this.route.snapshot.paramMap.get("id");
    this.http.post('http://localhost:8080/categorie/all',JSON.stringify('')).subscribe((response: any) => {
   this.categories=response;
  });
    this.http.post('http://localhost:8080/taille/gettaille?id='+this.Id,JSON.stringify('')).subscribe((response: any) => {
   this.taille=response;
   console.log("/////////////////////////////");

   console.log(response);

  });
}
  onFormSubmit(event: any) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    } 
   console.log("oooooooooooooooooooooooooo")
   
    this.http.post('http://localhost:8080/taille/update?id_taille='+event.target.id2.value
    +'&lib_taille='+event.target.lib_taille.value
    +'&categorie='+event.target.categorie_lib.value
    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/espace_admin/taille/lister']);
   });
   
  }
}