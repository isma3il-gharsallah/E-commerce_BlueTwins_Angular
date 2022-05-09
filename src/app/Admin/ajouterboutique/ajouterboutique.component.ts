import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-ajouterboutique',
  templateUrl: './ajouterboutique.component.html',
  styleUrls: ['./ajouterboutique.component.css']
})
export class AjouterboutiqueComponent implements OnInit {
  states:any[];
  citys:any[];
  selectedCountry: any;
  cities = [];
  registerForm: FormGroup;
  submitted = false;
  countries = [];
id;
  constructor(private http: HttpClient,private router: Router,private formBuilder: FormBuilder,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    }
  }
  get f() { return this.registerForm.controls; }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      lib_boutique: ['', Validators.required],
      mail_boutique: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      description_boutique: ['', Validators.required],
      tel_boutique: ['', Validators.required, Validators.minLength(8)],
      adresse: ['', Validators.required]

  });

    this.http.post('http://localhost:8080/state/all',JSON.stringify('')).subscribe((response: any) => {
      this.states=response;

           this.countries = this.states;
           for(var i=0;i<this.countries.length;i++){
            this.cities.push(this.countries[i]['city']);
           }
           this.cities = this.countries.filter(x => x.id_state == 1)[0].city;
           console.log(this.cities);
    });



  }
  onChange(deviceValue) {
    this.cities = this.countries.filter(x => x.id_state == deviceValue)[0].city;
  }
  onFormSubmit(event: any) {
    
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    //http://localhost:8080/boutique/save?tel_boutique=2222222&mail_boutique=isisisi@ffkjjf.com&description_boutique=cfff&lib_boutique=blue%20twins%20nabeul&adresse=2
 /*
    this.http.post('http://localhost:8080/adresse/save?lib_adresse='+event.target.adresse.value
    +'&city='+this.citys.id_city
    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);

      this.id=response.id_adresse;
          console.log("id adresse "+this.id);
    });
     */
    this.http.post('http://localhost:8080/adresse/save?lib_adresse='+event.target.adresse.value 
    +'&city='+event.target.city.value 
   ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
   
      this.http.post('http://localhost:8080/boutique/save?lib_boutique='+event.target.lib_boutique.value 
    +'&description_boutique='+event.target.description_boutique.value
    +'&mail_boutique	='+event.target.mail_boutique	.value
    +'&tel_boutique='+event.target.tel_boutique.value
    +'&adresse='+response['id_adresse'],
    JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/espace_admin/boutique/lister']);
    });
    });
    
 
  }

}
