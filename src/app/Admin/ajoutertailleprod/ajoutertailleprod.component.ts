import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-ajoutertailleprod',
  templateUrl: './ajoutertailleprod.component.html',
  styleUrls: ['./ajoutertailleprod.component.css']
})
export class AjoutertailleprodComponent implements OnInit {

  tailles = [];
  articles:any[];

  constructor(private http: HttpClient,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    }
  }

  ngOnInit() {

    this.http.post('http://localhost:8080/taille/all',JSON.stringify('')).subscribe((response: any) => {
      this.tailles=response;
          console.log(this.tailles);
    });
    this.http.post('http://localhost:8080/article/all',JSON.stringify('')).subscribe((response: any) => {
      this.articles=response;
          console.log(this.articles);
    });


  }

  onFormSubmit(event: any) {
    
    
     
 
    this.http.post('http://localhost:8080/taille_prod/save?quantite='+event.target.quantite.value
    +'&taille='+event.target.taille.value
    
    +'&article='+event.target.article.value
    
    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      
      
      this.router.navigate(['/espace_admin/article/lister']);
 
   });
 
 
 
   }

}
