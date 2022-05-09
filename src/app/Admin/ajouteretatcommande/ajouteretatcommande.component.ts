import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../session/_services/token-storage.service';
@Component({
  selector: 'app-ajouteretatcommande',
  templateUrl: './ajouteretatcommande.component.html',
  styleUrls: ['./ajouteretatcommande.component.css']
})
export class AjouteretatcommandeComponent implements OnInit {
  constructor(private http: HttpClient,private router: Router,private formBuilder: FormBuilder,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    }
  }
  get f() { return this.registerForm.controls; }
  registerForm: FormGroup;
  submitted = false;
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      etatcmd: ['', Validators.required],
     

  });

  }

  onFormSubmit(event: any) {
    
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

  this.http.post('http://localhost:8080/etatcommande/save?etatcmd='+event.target.etatcmd.value ,JSON.stringify('')).subscribe((response: any) => {
    console.log(response);
    this.router.navigate(['/espace_admin/etatcommande/lister']);

  });

}
}
