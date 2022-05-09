import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listerstaff',
  templateUrl: './listerstaff.component.html',
  styleUrls: ['./listerstaff.component.css']
})
export class ListerstaffComponent implements OnInit {
users=[];
comptes = [];
privileges = [];
adresse = [];
newsletters=[];
displayedColumns: string[] = [
  'id_user',
   'nom',
   'prenom',
   'tel',
   'id_compte',
   'id_privilege',
   'id_adresse',
   'Action'
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
constructor(private http: HttpClient,private router: Router,private tokenStorageService: TokenStorageService) { 
  if(!this.tokenStorageService.getToken()){
    this.router.navigate(['/login'])
  } }

  ngOnInit() {
   
    this.http.post('http://localhost:8080/adresse/all',JSON.stringify('')).subscribe((response: any) => {

      this.adresse.push(response);
      this.adresse=this.adresse['0'];

      console.log(this.adresse);
  });
    this.http.post('http://localhost:8080/privilege/all',JSON.stringify('')).subscribe((response: any) => {

      this.privileges.push(response);
      this.privileges=this.privileges['0'];

      console.log(this.privileges);
  });
    this.http.post('http://localhost:8080/compte/all',JSON.stringify('')).subscribe((response: any) => {

      this.comptes.push(response);
      this.comptes=this.comptes['0'];

      console.log(this.comptes);
  });
    this.http.post('http://localhost:8080/staff/lister',JSON.stringify('')).subscribe((response: any) => {

      this.users.push(response);
      this.users=this.users['0'];
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      console.log(this.users);

});
  }
  supprimer(id:number){
    this.http.post('http://localhost:8080/user/delete?id='+id,JSON.stringify('')).subscribe((response: any) => {
      location.reload();
      console.log(response);

});

}
}
