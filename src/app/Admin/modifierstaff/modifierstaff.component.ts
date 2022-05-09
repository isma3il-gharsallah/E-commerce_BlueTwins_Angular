import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../session/_services/token-storage.service';

@Component({
  selector: 'app-modifierstaff',
  templateUrl: './modifierstaff.component.html',
  styleUrls: ['./modifierstaff.component.css']
})
export class ModifierstaffComponent implements OnInit {

  constructor(private router: Router,private tokenStorageService: TokenStorageService) { 
    if(!this.tokenStorageService.getToken()){
      this.router.navigate(['/login'])
    } }

  ngOnInit() {
  }

}
