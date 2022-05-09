import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  /////////////////////////////
  
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  public toggleSelected() {
    if(this.selected){
    this.http.post('http://localhost:8080/favoris/delete?user='+this.user
    +'&article='+this.Id,JSON.stringify('')).subscribe((response: any) => {});
    }
    else{

      this.http.post('http://localhost:8080/favoris/save?user='+this.user
      +'&article='+this.Id,JSON.stringify('')).subscribe((response: any) => {});

    }
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
  
  
  /////////////////////
  form: FormGroup;
  Paniertems = [];
  quantiteSelected;
   Id;
   user;
   Article=[];
   tailles=[];
   tailleSelected;
   quantite=0;
  constructor(private route: ActivatedRoute ,private http: HttpClient) { 
    this.form = new FormGroup({
      type: new FormControl()
   });

  }

  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get("id");
    this.getName() ;

    //////////Favoris
    this.user= sessionStorage.getItem("user");
    this.http.post('http://localhost:8080/favoris/get?user='+this.user
    +'&article='+this.Id,JSON.stringify('')).subscribe((response: any) => {
    console.log(response);
     if(response)  {   
      this.selected = true;
    this.selectedChange.emit(this.selected);
     }

});
  }


  getName() {

    const data = {

       param1: 0,

       param2: 5,

    };

    this.http.post('http://localhost:8080/article/get?id='+this.Id,JSON.stringify(data)).subscribe((response: any) => {

          this.Article.push(response);
          this.Article=this.Article['0'];
          this.tailles=this.Article["taille_prod"];

          this.tailles = [this.tailles.filter(x => x.quantite>0)][0]

          console.log(this.tailles);
          let formBuilder = new FormBuilder();
          this.form = formBuilder.group({
            'type': this.somme(this.Article),
           });
           this.quantiteSelected=this.somme(this.Article);
    
    });

}


somme(article){
  var s=0;
for(let i=0;i<article.taille_prod.length;i++){
  s=s+article.taille_prod[i].quantite;
}
return s;
}

ajouterpanier(event){
  if(event.target.quantites.value>0){
 try{

var newItem = 
{
 id_article: this.Id,
 quantite: event.target.quantites.value,
 taille: this.form.value.type,
 image: this.Article['img_article'] ,
 designation:this.Article['designation'],
 prix:this.Article['prix']
 };
 localStorage.setItem(this.Id+this.form.value.type, JSON.stringify(newItem));
 
 location.reload();
}
 catch(e) {
  console.log(e); 
}
  }
}
 change(event){
   
  for(let i=0;i<this.Article['taille_prod'].length;i++){
   if (this.Article['taille_prod'][i].taille['lib_taille']==this.form.value.type)
   this.quantiteSelected=this.Article['taille_prod'][i].quantite;
  }
}

}
