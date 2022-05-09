import { Component, OnInit, HostListener, Output, Input,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  /////////////////////////////////////
  
  
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  public toggleSelected() {

    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  
  /////////////////////////////////////////
  Articles = [];
  ImageSource;  
 
  offset = 0; 
  limit = 5;
  constructor(private http: HttpClient) {}
  ngOnInit() {this.getName(this.offset, this.limit) ;}

//////

///////





  getName(offset, limit) {

    const data = {

       param1: offset,

       param2: limit,

    };

    this.http.post('http://localhost:8080/article/all',JSON.stringify(data)).subscribe((response: any) => {

          this.Articles.push(response);
          this.Articles=this.Articles['0'];
          this.ImageSource = window.URL.createObjectURL(this.Articles['img_article']);

          console.log(this.Articles);

    });

}
loadData(event) {

  setTimeout(() => {

    console.log('Done');

    this.offset = this.offset + 5;

    this.getName(this.offset, this.limit);

    event.target.complete();

    // App logic to determine if all data is loaded

    // and disable the infinite scroll

    if (this.Articles.length === 20) {

      event.target.disabled = true;

    }

  }, 500);

}

}
