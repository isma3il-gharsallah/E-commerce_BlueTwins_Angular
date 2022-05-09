import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorie',
  templateUrl: './favorie.component.html',
  styleUrls: ['./favorie.component.css']
})
export class FavorieComponent implements OnInit {
  user;
  favoris;

  constructor(private router: Router,private http: HttpClient) { 
    this.user= sessionStorage.getItem("user");


  }

  ngOnInit() {
    if(!sessionStorage.getItem("user"))
    {
      this.router.navigate(['/compte/register/connexion']);
    }
    else{
      this.http.post('http://localhost:8080/user/get?id='+this.user
      ,JSON.stringify('')).subscribe((response: any) => {
        this.favoris=response['favoris'];
      });
    }

}
Supprimer(id){
  this.http.post('http://localhost:8080/favoris/delete?user='+this.user
  +'&article='+id,JSON.stringify('')).subscribe((response: any) => {});
  location.reload();
}
}