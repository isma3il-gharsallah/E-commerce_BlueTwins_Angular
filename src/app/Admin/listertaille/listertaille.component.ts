import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listertaille',
  templateUrl: './listertaille.component.html',
  styleUrls: ['./listertaille.component.css']
})
export class ListertailleComponent implements OnInit {
  tailles = [];
  newsletters=[];
  displayedColumns: string[] = [
    'id_taille',
     'lib_taille',
     'categorie',
    
     'Action'
    ];
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http: HttpClient,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }

  ngOnInit() {
    this.http.post('http://localhost:8080/taille/all',JSON.stringify('')).subscribe((response: any) => {

      this.tailles.push(response);
      this.tailles=this.tailles['0'];
      this.dataSource = new MatTableDataSource(this.tailles);
      this.dataSource.paginator = this.paginator;

      console.log(this.tailles);
  });
}
supprimer(id:number){
  this.http.post('http://localhost:8080/taille/delete?id='+id,JSON.stringify('')).subscribe((response: any) => {
    location.reload();
    console.log(response);

});

}

  }


