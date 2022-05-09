import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-modifiercommande',
  templateUrl: './modifiercommande.component.html',
  styleUrls: ['./modifiercommande.component.css']
})
export class ModifiercommandeComponent implements OnInit {
  commandes =[];
  etatcommandes=[];
 id;
 client;
 constructor(private http: HttpClient ,private route: ActivatedRoute,private router: Router,private tokenStorageService: TokenStorageService) { 
  if(!this.tokenStorageService.getToken()){
    this.router.navigate(['/login'])
  } }

  ngOnInit() {
    this.http.post('http://localhost:8080/etatcommande/all',JSON.stringify('')).subscribe((response: any) => {

      this.etatcommandes.push(response);
      this.etatcommandes=this.etatcommandes['0'];

      console.log(this.etatcommandes);
  });

    this.id = this.route.snapshot.paramMap.get("id");
    this.http.post('http://localhost:8080/commande/getcommande?id='+this.id,JSON.stringify('')).subscribe((response: any) => {
     this.commandes=response;
  console.log( this.commandes)
  this.http.post('http://localhost:8080/user/get?id='+response['user'],JSON.stringify('')).subscribe((response2: any) => {
    this.client=response2;
 });
  });


 
  }

  onFormSubmit(event: any) {
 this.http.post('http://localhost:8080/commande/modifEtat?id='+this.id+'&etat='
 +event.target.etatcmd.value
 ,JSON.stringify('')).subscribe((response: any) => {
  this.router.navigate(['/espace_admin/commande/lister']);

});
   }


}
