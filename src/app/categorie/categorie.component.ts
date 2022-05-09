import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  Articles = [];
  //myForm: FormGroup;
  categories = [];
  rev=true;
  mode;
  cat;
  

  filteredProducts ;
  minValue: number = 0;
  maxValue: number = 500;
  
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
     
      switch (label) {
        case LabelType.Low:{
          this.minValue=value;
          if(!this.cat){
        this.filteredProducts = [this.Articles.filter(x =>  x.prix >= this.minValue && x.prix <= this.maxValue && x.gender.gender_lib==this.route.snapshot.paramMap.get("mode"))]
          }
          else
          {
            this.filteredProducts = [this.Articles.filter(x => x.categorie.categorie_lib == this.cat && x.prix >= this.minValue && x.prix <= this.maxValue && x.gender.gender_lib==this.route.snapshot.paramMap.get("mode"))]

          }
         return  value+' TND' ;
        }
        case LabelType.High:{
          this.maxValue=value;
          if(!this.cat){
         this.filteredProducts = [this.Articles.filter(x => x.prix >= this.minValue && x.prix <= this.maxValue &&  x.gender.gender_lib==this.route.snapshot.paramMap.get("mode"))]
          }
          else
          {
            this.filteredProducts = [this.Articles.filter(x => x.categorie.categorie_lib == this.cat && x.prix >= this.minValue && x.prix <= this.maxValue &&  x.gender.gender_lib==this.route.snapshot.paramMap.get("mode"))]

          }
          console.log(value);

          return  value+' TND' ;

        }
        default:
          return ' TND ' + value;
      }
      
    }
    
  };
  
  filteredProductsReserve: any[][];

  constructor(private fb: FormBuilder,private http: HttpClient,private route: ActivatedRoute) {
    
    this.mode=this.route.snapshot.paramMap.get("mode");

  
  }

  ngOnInit() {

    this.http.post('http://localhost:8080/categorie/all',JSON.stringify('')).subscribe((response: any) => {

      this.categories.push(response);
      this.categories=this.categories['0'];
      console.log(this.categories);

      this.categories = this.categories.filter(x => x.gender.gender_lib==this.route.snapshot.paramMap.get("mode"))

      console.log(this.categories);
  });

    this.http.post('http://localhost:8080/article/all',JSON.stringify('')).subscribe((response: any) => {

      this.Articles.push(response);
      this.Articles=this.Articles[0];
      this.Articles = this.Articles.sort((low, high) => low.prix - high.prix);

      this.filteredProducts=[this.Articles];
      this.filteredProducts = [this.Articles.filter(x => x.gender.gender_lib==this.route.snapshot.paramMap.get("mode"))]

      console.log(this.filteredProducts[0]);

});


  }
trier(){
  
this.rev=!this.rev;

}


changeCategorie(ev){
  
this.cat=ev;
console.log(this.cat);

this.filteredProducts = [this.Articles.filter(x => x.categorie.categorie_lib == ev && x.prix >= this.minValue && x.prix <= this.maxValue && x.gender.gender_lib==this.route.snapshot.paramMap.get("mode"))]

}

}
