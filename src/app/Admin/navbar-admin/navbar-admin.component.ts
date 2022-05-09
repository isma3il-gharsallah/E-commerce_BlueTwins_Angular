
import { Component, TemplateRef, HostListener, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'; 
import { TokenStorageService } from '../session/_services/token-storage.service';
@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css'],
   animations: [
  trigger('collapse', [
    state('open', style({
      opacity: '1'
    })),
    state('closed',   style({
      opacity: '0',
      display: 'none',   
    })),
    transition('closed => open', animate('400ms ease-in')),
    transition('open => closed', animate('400ms ease-out'))
  ])
]
})
export class NavbarAdminComponent {
  isNavbarCollapsed = true;
  _isNavbarCollapsedAnim = 'closed';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.onResize(window);
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  logout() {
    window.sessionStorage.clear();
   }
  @HostListener('window:resize', ['$event.target']) 
onResize(event) { 

  if(event.innerWidth > 990){
    //need to set this to 'open' for large screens to show up because of opacity in 'closed' animation.
    this._isNavbarCollapsedAnim = 'open';
    this.isNavbarCollapsed = true;
  }else{
    // comment this line if you don't want to collapse the navbar when window is resized.
   // this._isNavbarCollapsedAnim = 'closed';
    

  }
}
  toggleNavbar(): void {
    if(this.isNavbarCollapsed){
        this._isNavbarCollapsedAnim = 'open';
      this.isNavbarCollapsed = false;
    } else {
    this._isNavbarCollapsedAnim = 'closed';
    setTimeout( () =>{
      console.log('insdie set timeout');
      this.isNavbarCollapsed = true;}, 400 );
      console.log('after set timeout');
    }
  }
  get isNavbarCollapsedAnim() : string {
    return this._isNavbarCollapsedAnim;
  }




}
