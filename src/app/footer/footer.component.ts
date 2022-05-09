import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
boutiques= [];
  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {

    this.http.post('http://localhost:8080/boutique/all',JSON.stringify('')).subscribe((response: any) => {

      this.boutiques.push(response);
      this.boutiques=this.boutiques['0'];

      console.log(this.boutiques);
  
  });
  }
  ajouternews(event: any) {
    this.http.post('http://localhost:8080/newsletter/save?email='+event.target.news.value ,JSON.stringify('')).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/']);
  
    });

    
}
public onSubmit(event: Event): void {
  this.stopSynchronousPostRequest(event);
  if (this.isValid(event.target as HTMLFormElement)) {
    alert('You are now subscribed');
    this.ajouternews(event);
  } else {
    alert('You need to enter a correct email address.')
  }
}

private isValid(form: HTMLFormElement): boolean {
 
  return form.checkValidity();
}

private stopSynchronousPostRequest(event: Event): void {
  event.preventDefault();
}
}
