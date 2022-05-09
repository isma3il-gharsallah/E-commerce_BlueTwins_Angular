import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-modifierboutique',
  templateUrl: './modifierboutique.component.html',
  styleUrls: ['./modifierboutique.component.css']
})
export class ModifierboutiqueComponent implements OnInit {

  boutique:any[];
  Id;
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }

 
ngOnInit() {
  this.Id = this.route.snapshot.paramMap.get("id");

  this.http.post('http://localhost:8080/boutique/get?id='+this.Id,JSON.stringify('')).subscribe((response: any) => {
 this.boutique=response;
 console.log(response);
});
}
onFormSubmit(event: any) {


  this.http.post('http://localhost:8080/boutique/update?id_boutique='+event.target.id2.value
  +'&lib_boutique='+event.target.lib_boutique.value
  +'&description_boutique='+event.target.description_boutique.value
  +'&mail_boutique	='+event.target.mail_boutique	.value
  +'&tel_boutique='+event.target.tel_boutique.value
  ,JSON.stringify('')).subscribe((response: any) => {
    console.log(response);
    this.router.navigate(['/espace_admin/boutique/lister']);
 });
 
}

}
