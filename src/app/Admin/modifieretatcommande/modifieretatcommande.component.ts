import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-modifieretatcommande',
  templateUrl: './modifieretatcommande.component.html',
  styleUrls: ['./modifieretatcommande.component.css']
})
export class ModifieretatcommandeComponent implements OnInit {

  etatcommande:any[];
  Id;
  get f() { return this.registerForm.controls; }
  registerForm: FormGroup;
  submitted = false;
 

  constructor(private http: HttpClient,private route: ActivatedRoute ,private formBuilder: FormBuilder ,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      etatcmd: ['', Validators.required],
     

  });
    this.Id = this.route.snapshot.paramMap.get("id");

    this.http.post('http://localhost:8080/etatcommande/getetatcommande?id='+this.Id,JSON.stringify('')).subscribe((response: any) => {
   this.etatcommande=response;
   console.log(response);
  });
}
  onFormSubmit(event: any) {
   
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }


    this.http.post('http://localhost:8080/etatcommande/update?id_etatcmd='+event.target.id2.value
    +'&etatcmd='+event.target.etatcmd.value
    ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/espace_admin/etatcommande/lister']);
   });
   
  }
}
