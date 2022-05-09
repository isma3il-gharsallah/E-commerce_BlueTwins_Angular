import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listermodelivraison',
  templateUrl: './listermodelivraison.component.html',
  styleUrls: ['./listermodelivraison.component.css']
})
export class ListermodelivraisonComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }
  modes = [];
  newsletters=[];
  displayedColumns: string[] = [
    'id_modeliv',
     'lib_mod_liv',
      
    
     'Action'
    ];
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.http.post('http://localhost:8080/modelivraison/all',JSON.stringify('')).subscribe((response: any) => {

      this.modes.push(response);
      this.modes=this.modes['0'];
      this.dataSource = new MatTableDataSource(this.modes);
      this.dataSource.paginator = this.paginator;
      console.log(this.modes);
  });
}
supprimer(id:number){
  this.http.post('http://localhost:8080/modelivraison/delete?id='+id,JSON.stringify('')).subscribe((response: any) => {
    location.reload();
    console.log(response);

});

}
}
