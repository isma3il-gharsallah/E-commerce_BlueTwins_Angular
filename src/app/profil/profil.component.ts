import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user;
  privilege;
  compte;
  city = [];

  countries = [
  ];
  adresseNull=false;

   stateCount;
   cityCount;
  adresse: any;
  constructor(private router: Router,private http: HttpClient) { 
    this.user= sessionStorage.getItem("user");
    
    this.http.post('http://localhost:8080/state/all'
    
    ,JSON.stringify('')).subscribe((response: any) => {
      this.countries=response; 
      console.log(this.countries);
   });


  }

  ngOnInit() {
    if(!sessionStorage.getItem("user"))
    {
      this.router.navigate(['/compte/register/connexion']);

    }
    
this.getuser();
    
    

    /* this.countries.push(
      {
        id: 1, name: 'Tunis', cities: ['Beb lkhadhra', 'mourouj 3']
      },
      {
        id: 2, name: 'Nabeul', cities: ['Beni khiar', 'Dar Chaaban', 'beni khalled']
      },
      {
        id: 3, name: 'Sousse', cities: ['Ben Jaafar']
      },
    )
    */
  }
getuser(){

  this.http.post('http://localhost:8080/user/get?id='+this.user
,JSON.stringify('')).subscribe((response: any) => {
  this.user=response;

  
  this.privilege=response['privilege']['id_privilege'];
  this.compte=response['compte']['id_compte'];
  if(!response['adresse']){
   
      this.city = this.countries.filter(x => x.id_state == 1)[0].city;
      this.adresse.lib_adresse= null;

    }
  for(var i=0;i<this.countries.length;i++){
    if(this.countries[i]['lib_state'] === this.user.adresse.city.state){

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
onFormSubmit(event: any){
  this.http.post('http://localhost:8080/adresse/save?lib_adresse='+event.target.adresse.value
  +'&city='+event.target.city.value
  
  ,JSON.stringify('')).subscribe((response: any) => {

this.http.post('http://localhost:8080/user/update?id_user='+this.user.id_user
+'&nom='+event.target.nom.value
+'&prenom='+event.target.prenom.value
+'&tel='+event.target.tel.value
+'&sexe=null'
+'&img_user=null'
+'&privilege='+this.privilege
+'&compte='+this.compte
+'&adresse='+response['id_adresse']
,JSON.stringify('')).subscribe((response: any) => {
  this.user=response;
  console.log(this.user);
});
 });



}
modifier(){
  this.adresseNull=false;
  
  }
  onChangeState(deviceValue) {
    this.city = this.countries.filter(x => x.id_state == deviceValue)[0].city;
    console.log(this.city)
  }
}
