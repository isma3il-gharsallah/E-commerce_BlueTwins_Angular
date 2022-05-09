import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
declare let $: any;
@Component({
  selector: 'app-listercompte',
  templateUrl: './listercompte.component.html',
  styleUrls: ['./listercompte.component.css']
})
export class ListercompteComponent {
  
  comptes=[];
  newsletters=[];
  displayedColumns: string[] = [
    'id_compte',
     'login',
     'password',
    
     'Action'
    ];
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http: HttpClient,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } 
    
    this.http.post('http://localhost:8080/compte/all',JSON.stringify('')).subscribe((response: any) => {

      this.comptes=response;
      this.dataSource = new MatTableDataSource(this.comptes);
      this.dataSource.paginator = this.paginator;

      console.log(this.comptes);
   
     } );
     
  }
  supprimer(id:number){
    this.http.post('http://localhost:8080/compte/delete?id='+id,JSON.stringify('')).subscribe((response: any) => {
      location.reload();
      console.log(response);

});

}
}