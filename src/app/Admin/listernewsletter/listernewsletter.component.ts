import { Component, ViewChild , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';




      
@Component({
  selector: 'app-listernewsletter',
  templateUrl: './listernewsletter.component.html',
  styleUrls: ['./listernewsletter.component.css']
})
export class ListernewsletterComponent {
  newsletters=[];
 
  displayedColumns: string[] = ['id_news', 'email','Action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http: HttpClient,private router: Router,private tokenStorageService: TokenStorageService) { 
   
       
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } 
  
    this.http.post('http://localhost:8080/newsletter/all',JSON.stringify('')).subscribe((response: any) => {

      this.newsletters=response;

      this.dataSource = new MatTableDataSource(this.newsletters);
      this.dataSource.paginator = this.paginator;

      } );

   
  }
  

  supprimer(id:number){
    this.http.post('http://localhost:8080/newsletter/delete?id='+id,JSON.stringify('')).subscribe((response: any) => {
      location.reload();
      console.log(response);
  
  });
  
  }

}