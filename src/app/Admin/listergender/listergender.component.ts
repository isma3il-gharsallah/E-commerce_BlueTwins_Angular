import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listergender',
  templateUrl: './listergender.component.html',
  styleUrls: ['./listergender.component.css']
})
export class ListergenderComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }
  genders = [];
  newsletters=[];
  displayedColumns: string[] = [
    'id_gender',
     'gender_lib',
      
    
     'Action'
    ];
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.http.post('http://localhost:8080/gender/all',JSON.stringify('')).subscribe((response: any) => {

      this.genders.push(response);
      this.genders=this.genders['0'];
      this.dataSource = new MatTableDataSource(this.genders);
      this.dataSource.paginator = this.paginator;
      console.log(this.genders);
  });
}
supprimer(id:number){
  this.http.post('http://localhost:8080/gender/delete?id='+id,JSON.stringify('')).subscribe((response: any) => {
    location.reload();
    console.log(response);

});

}
}
