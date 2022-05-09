import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public nbrArticles:number;
  user;
  constructor() { 
    this.user= sessionStorage.getItem("user");
  }

  ngOnInit() {
    var keys = Object.keys(localStorage);
    if(keys.length>0)
    this.nbrArticles = keys.length;
  }
   getnbrArticles(){
    location.reload();}

    deconnexion(){
      sessionStorage.removeItem('user');
    location.reload();
    }
}
