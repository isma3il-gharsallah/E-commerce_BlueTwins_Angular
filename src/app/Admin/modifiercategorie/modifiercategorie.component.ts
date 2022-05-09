import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-modifiercategorie',
  templateUrl: './modifiercategorie.component.html',
  styleUrls: ['./modifiercategorie.component.css']
})
export class ModifiercategorieComponent implements OnInit {
  categorie:any[];
  Id;
  registerForm: FormGroup;
  submitted = false;
  id_liste='';
  genders: any;

  constructor(private http: HttpClient,private route: ActivatedRoute ,private formBuilder: FormBuilder ,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      categorie_lib: ['', Validators.required],
     

  });
    this.Id = this.route.snapshot.paramMap.get("id");

    this.http.post('http://localhost:8080/categorie/get?id='+this.Id,JSON.stringify('')).subscribe((response: any) => {
   this.categorie=response;
   console.log(response);
  });
  this.http.post('http://localhost:8080/gender/all',JSON.stringify('')).subscribe((response: any) => {
    this.genders=response;
        console.log(this.genders);
  });
}
  onFormSubmit(event: any) {
   
 
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
 
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    this.http.post('http://localhost:8080/categorie/update?id_categorie='+event.target.id2.value
    +'&categorie_lib='+event.target.categorie_lib.value
    +'&gender='+this.id_liste

    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/espace_admin/categorie/lister']);
   });
  

  }

  
get result() {
  this.id_liste=''
  this.genders.filter(item => item.checked);
  for(let i=0;i<this.genders.length;i++){
    if(this.genders[i].checked)
    this.id_liste=this.id_liste+this.genders[i].id_gender+",";
  }
  return this.id_liste;
}
}
