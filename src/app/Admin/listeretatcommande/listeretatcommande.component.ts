import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listeretatcommande',
  templateUrl: './listeretatcommande.component.html',
  styleUrls: ['./listeretatcommande.component.css']
})
export class ListeretatcommandeComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }
  etatcommandes = [];
  newsletters=[];
  displayedColumns: string[] = [
    'id_etatcmd',
     'etatcmd',
      
    
     'Action'
    ];
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.http.post('http://localhost:8080/etatcommande/all',JSON.stringify('')).subscribe((response: any) => {

      this.etatcommandes.push(response);
      this.etatcommandes=this.etatcommandes['0'];
      this.dataSource = new MatTableDataSource(this.etatcommandes);
      this.dataSource.paginator = this.paginator;
      console.log(this.etatcommandes);
  });
}
supprimer(id:number){
  this.http.post('http://localhost:8080/etatcommande/delete?id='+id,JSON.stringify('')).subscribe((response: any) => {
    location.reload();
    console.log(response);

});

}
}
