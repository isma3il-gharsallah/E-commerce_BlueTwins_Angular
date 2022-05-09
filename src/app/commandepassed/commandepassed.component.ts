import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-commandepassed',
  templateUrl: './commandepassed.component.html',
  styleUrls: ['./commandepassed.component.css']
})
export class CommandepassedComponent implements OnInit {
  commmandes ;
  etat_commande;
id= [];
  constructor(private http: HttpClient,private router: Router) {
    if(!sessionStorage.getItem("user"))
    {
      this.router.navigate(['/compte/register/connexion']);

    }
   }

  ngOnInit() {
    this.http.post('http://localhost:8080/vos_commande/lister?id='+sessionStorage.getItem("user"),JSON.stringify('')).subscribe((response: any) => {
      console.log(this.commmandes);

      this.commmandes=response;
      console.log(this.commmandes);

    });
   

   
   
    
  }
 
}
