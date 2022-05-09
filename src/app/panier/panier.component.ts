import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
 panier;
 total=0;
 text = 'Produit a été retiré';
   constructor(private http: HttpClient,private router: Router) { 
    this.panier=this.allStorage();
    for(var i=0;i<this.panier.length;i++){
    this.total+=this.panier[i].prix*this.panier[i].quantite
    }
  }

  ngOnInit() {
    console.log(this.panier)  
  if(this.panier.length==0){
    this.router.navigate(['']);
  }
  
}

 public allStorage() {
       var values=[];
       var keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));

    }
    return values;
}
article(id){
  this.http.post('http://localhost:8080/article/get?id='+id,JSON.stringify('')).subscribe((response: any) => {
    console.log(response);
  });
return 'false';
}
remove(id){
localStorage.removeItem(id);
 
location.reload();
NavbarComponent['nbrArticles']-=1;
NavbarComponent['getnbrArticles()'];
}

livraison(){
  
  if(!sessionStorage.getItem("user"))
  {
    this.router.navigate(['/compte/register/livraison']);
  }
  else{
    this.router.navigate(['/livraison']);

  }
}

}
