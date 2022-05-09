import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.component.html',
  styleUrls: ['./detailcommande.component.css']
})
export class DetailcommandeComponent implements OnInit {
  commmandes = [];
  commande;
  etat_commande;
  Id;
  user;
  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute ) { 
    if(!sessionStorage.getItem("user"))
  {
    this.router.navigate(['/compte/register/connexion']);

  }
else{
  
  this.http.post('http://localhost:8080/user/get?id='+sessionStorage.getItem("user")
,JSON.stringify('')).subscribe((response: any) => {
   this.user= response;
 });
}

}
  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get("id");
     //inraj3ou ne5dou bel /all wel id imte3 el user 
   // this.http.post('http://localhost:8080/vos_commande/get?id='+this.Id,JSON.stringify('')).subscribe((response: any) => {
     
//hedhio eli te5dem mouch el fou9ania 
      this.http.post('http://localhost:8080/commande/getcommande?id='+this.Id,JSON.stringify('')).subscribe((response: any) => {
        console.log(response);
       this.commmandes.push(response) ;
       
  
    this.commande=this.commmandes[0];
    });
   

  }

}
