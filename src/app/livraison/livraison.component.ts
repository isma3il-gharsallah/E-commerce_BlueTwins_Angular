import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {
  panier;
  total=0;
  show=false;
  boutiques;
  adresse_boutique;
  montant_livraison=8;
  date1;date2;
  user;
  articles=[];
  adresseNull=true;
  adresse={
    id: Number,
    lib_adresse: String,
    city: String,
    state: String
  }
  
  city = [];

  countries = [
  ];
 
   stateCount;
   cityCount;
  Newadresse: any;


  constructor(private router: Router,private http: HttpClient,private formBuilder: FormBuilder) {
 
    this.panier=this.allStorage();
    if(this.panier.length==0){
      this.router.navigate(['']);
    }
    for(var i=0;i<this.panier.length;i++){
      this.total+=this.panier[i].prix*this.panier[i].quantite
      }
      this.date1=new Date(new Date().getTime()+(5*24*60*60*1000))
      this.date2=new Date(new Date().getTime()+(7*24*60*60*1000))
    
      this.http.post('http://localhost:8080/state/all'
    
      ,JSON.stringify('')).subscribe((response: any) => {
        this.countries=response; 
        console.log(this.countries);
     });
  
   }

  ngOnInit() {

   


    if(!sessionStorage.getItem("user"))
    {
      this.router.navigate(['/compte/register/livraison']);
    }
    this.getuser();

    this.http.post('http://localhost:8080/boutique/all',JSON.stringify('')).subscribe((response: any) => {

      this.boutiques=response;

      console.log(this.boutiques);

});
this.http.post('http://localhost:8080/user/get?id='+sessionStorage.getItem('user')
,JSON.stringify('')).subscribe((response: any) => {

  this.user=response;
  if(response['adresse']){
  this.adresse.lib_adresse= this.user.adresse.lib_adresse;
  this.adresse.city= this.user.adresse.city.lib_city;
  this.adresse.state= this.user.adresse.city.state;
  this.adresse.id= this.user.adresse.id_adresse;
  this.adresseNull=true;
  }
  else{
    this.city = this.countries.filter(x => x.id_state == 1)[0].city;
    this.adresse.lib_adresse= null;

  }
  
  console.log(this.user);

});

  }

 allStorage() {
       var values=[];
       var keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));

    }
    return values;
}

toggle(b){
  this.show = b;
  if(b){
    this.montant_livraison=4;
  }
  else {
    this.montant_livraison=8;

  }
}

onChange(id) {
  if(id!='false'){
  this.http.post('http://localhost:8080/boutique/get?id='+id,JSON.stringify('')).subscribe((response: any) => {
 console.log(response);
      this.adresse_boutique =response['adresse']['lib_adresse'] +', '+response['adresse']['city']['lib_city']+', '+response['adresse']['city']['state'];
});
}

}

modifier(){
this.adresseNull=false;

}
onChangeState(deviceValue) {
  this.city = this.countries.filter(x => x.id_state == deviceValue)[0].city;
  console.log(this.city)
}


getuser(){

  this.http.post('http://localhost:8080/user/get?id='+sessionStorage.getItem("user")
,JSON.stringify('')).subscribe((response: any) => {
  this.user=response;


  for(var i=0;i<this.countries.length;i++){
    if(this.countries[i]['lib_state'] === this.user.adresse.city.state){
      console.log(this.countries[i]['lib_state']+'='+this.user.adresse.city.state)

      this.stateCount=this.countries[i]['id_state'];
      console.log(this.stateCount)
      this.city = this.countries.filter(x => x.id_state == this.stateCount)[0].city;

     
      for(var j=0;j<this.countries[i]['city'].length;j++){

        if(this.countries[i]['city'][j].id_city === this.user.adresse.city.id_city){
          this.cityCount=this.countries[i]['city'][j].id_city;
        }
      }
    }
  
  }
  
  console.log(this.user);
});
}
onFormSubmit(event){
   

  var now=new Date() ;
  var date=Number(now.getMonth()+1)+'-'+ now.getUTCDate() +'-'+now.getFullYear()
  console.log('date:'+ date);

  var mode_liv;
  var id_boutique=0;
  var phone;
  this.adresseNull=false;
  try{
    phone=event.target.phone.value
   console.log(phone)
  }
  catch(e){
  }
if(this.montant_livraison==4){
  mode_liv=2;
  id_boutique=event.target.boutique.value;
}
else{
  mode_liv=1;
}
   this.http.post('http://localhost:8080/adresse/save?lib_adresse='+event.target.adresse.value
  +'&city='+event.target.city.value
  
  ,JSON.stringify('')).subscribe((response: any) => {
   this.adresse.id=response['id_adresse'];
   console.log(this.adresse.id);
   this.http.post('http://localhost:8080/commande/save?prix_total='+ Number(this.total+this.montant_livraison)
   +'&date_cmd='+date
   +'&etatcommande=1'
   +'&user='+sessionStorage.getItem("user")
   +'&adresse='+this.adresse.id
   +'&modelivraison='+mode_liv
   +'&boutique='+id_boutique
   +'&tel_commande='+phone
   +'&date_limit='+Number(this.date2.getMonth()+1) +'-'+this.date2.getUTCDate()+'-'+ this.date2.getFullYear()
  ,JSON.stringify('')).subscribe((response1: any) => {
     var values=[];
     var keys = Object.keys(localStorage),
      i = keys.length;
    while ( i-- ) {
     this.http.post('http://localhost:8080/commande_prod/save?article='+JSON.parse(localStorage.getItem(keys[i]))['id_article']
     +'&taille='+JSON.parse(localStorage.getItem(keys[i]))['taille']
     +'&quantite='+JSON.parse(localStorage.getItem(keys[i]))['quantite']
     +'&sous_total='+JSON.parse(localStorage.getItem(keys[i]))['prix']*JSON.parse(localStorage.getItem(keys[i]))['quantite'] 
     +'&commande='+response1['id_cmd']
     ,JSON.stringify('')).subscribe((response: any) => {
       
      localStorage.removeItem(response.article.id_article+response.taille); 
      
      this.http.post('http://localhost:8080/taille/getTailleNom?t='+response['taille']
      ,JSON.stringify('')).subscribe((response2: any) => {
    this.http.post('http://localhost:8080/taille_prod/updateQuantite?id_article='+response.article['id_article']
    +'&id_taille='+response2
    +'&qte='+response['quantite']
      ,JSON.stringify('')).subscribe((response3: any) => {
     });
   });
      localStorage.removeItem(response.article.id_article+response.taille); 
    });  
  }

   this.router.navigate(['/voscommande']);
   });

 });
 
}

}