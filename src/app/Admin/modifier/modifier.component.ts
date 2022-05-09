import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  categories:any[];
  genders:any[];
   Id;
  article:Article;
  selectedFile: File;
  name=["n1","n2","n3","n4"];
  constructor(private route: ActivatedRoute ,private http: HttpClient,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }

  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get("id");
    
    this.http.post('http://localhost:8080/article/get?id='+this.Id,JSON.stringify('')).subscribe((response: any) => {
   this.article=response;
   console.log("////////////////////////////");

 /*
   var oldItems = [];
 oldItems.push(response);
 localStorage.setItem(response['id_article'], JSON.stringify(oldItems));
 this.allStorage();
 */
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

  onFormSubmit(event: any) {
    // this.article.designation=event.target.designation.value;
    //this.article.prix=event.target.prix.value;
    try {
      var selectedFile="assets/images/"+this.selectedFile['name'];
    } catch (ex) {
      var selectedFile=this.article['img_article'];
    }
   
    this.http.post('http://localhost:8080/article/update?id_article='+event.target.id2.value
    +'&designation='+event.target.designation.value
    +'&prix='+event.target.prix.value
    +'&description_article='+event.target.description_article.value
    +'&categorie='+event.target.categorie.value
    +'&taux_tva='+event.target.tva.value
    +'&taux_remise='+event.target.remise.value
    +'&gender='+event.target.gender.value
    +'&img_article='+selectedFile
    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      try{
      this.onUpload();
      }
      catch(e){}
      this.router.navigate(['/espace_admin/article/lister']);

   });
  
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
  
/*
  allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );

    }

    console.log(values);
}
*/
}
