import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../session/_services/token-storage.service';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent implements OnInit {
  Articles = [];
  newsletters=[];
 
  displayedColumns: string[] = [
    'id_article',
     'designation',
    'prix',
    'qte',
    'taux_remise',
    'taux_tva',
    'categorie',
    'Action'
    ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    constructor(private http: HttpClient,private tokenStorageService: TokenStorageService,private router: Router) { 

      if(!this.tokenStorageService.getToken()){
        this.router.navigate(['/login'])
      }
    }

  ngOnInit() {
   
    this.http.post('http://localhost:8080/article/all',JSON.stringify('')).subscribe((response: any) => {

      this.Articles.push(response);
      this.Articles=this.Articles['0'];

      this.dataSource = new MatTableDataSource(this.Articles);
      this.dataSource.paginator = this.paginator;
      console.log(this.Articles);

});
  }
  supprimer(id:number){
    this.http.post('http://localhost:8080/article/delete?id='+id,JSON.stringify('')).subscribe((response: any) => {
      location.reload();
      console.log(response);

});

  }
somme(article){
  var s=0;
for(let i=0;i<article.taille_prod.length;i++){
  s=s+article.taille_prod[i].quantite;
}
return s;
}

}
