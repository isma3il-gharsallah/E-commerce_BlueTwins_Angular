import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup,Validators } from '@angular/forms';
 import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  selectedFile: File
  registerForm: FormGroup;
  submitted = false;
  categories:any[];
  genders:any[];
  tailles = [];
  article:any[];
  Id;

  constructor(private http: HttpClient,private router: Router,private formBuilder: FormBuilder,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    }
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      designation: ['', Validators.required],
      prix: ['', Validators.required,Validators.min(2)],
      description: ['', Validators.required],
      tva: ['', [Validators.required,Validators.minLength(1)]],
      remise: ['', [Validators.required, Validators.minLength(2)]],
      image: ['', Validators.required]

  });


    this.http.post('http://localhost:8080/taille/all',JSON.stringify('')).subscribe((response: any) => {
      this.tailles=response;
          console.log(this.tailles);
    });

    this.http.post('http://localhost:8080/categorie/all',JSON.stringify('')).subscribe((response: any) => {
      this.categories=response;
          console.log(this.categories);
    });
    this.http.post('http://localhost:8080/gender/all',JSON.stringify('')).subscribe((response: any) => {
      this.genders=response;
          console.log(this.genders);
    });
  }

  get f() { return this.registerForm.controls; }

  onFormSubmit(event: any) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

   
   
    

   this.http.post('http://localhost:8080/article/save?designation='+event.target.designation.value
   +'&prix='+event.target.prix.value
   +'&description_article='+event.target.description_article.value
   +'&categorie='+event.target.categorie.value
   +'&taux_tva='+event.target.tva.value
   +'&taux_remise='+event.target.remise.value
   +'&gender='+event.target.gender.value
   +'&img_article=/assets/images/'+this.selectedFile['name']
   ,JSON.stringify('')).subscribe((response: any) => {
     console.log(response);
     this.Id=response.id_article;
     this.AjouterSize(event.target.categorie.value);
     this.onUpload();
     this.router.navigate(['/espace_admin/article/lister']);

  });



  }

  AjouterSize(categorie_article:any){
    for(let i=0;i<this.tailles.length;i++)
    {
      if(this.tailles[i].categorie.id_categorie==categorie_article)
    this.http.post('http://localhost:8080/taille_prod/save?article='+this.Id
      +'&taille='+this.tailles[i].id_taille
      +'&quantite=0'
      ,JSON.stringify('')).subscribe((response: any) => {
        console.log(response);
     }); 
  
    };
  }


  updateQuantite(quantite:String,id_taille_prod:string,taille:String){
    
    this.http.post('http://localhost:8080/taille_prod/update?id_taille_prod='+id_taille_prod
    +'&article='+this.Id
    +'&taille='+taille
    +'&quantite='+quantite
    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
   }); 

   }

   onFileChanged(event) {
    this.selectedFile = event.target.files[0]
     
  }
  onUpload() {
    // this.http is the injected HttpClient
    const file = new FormData();
    file.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/upload', file, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }

}
