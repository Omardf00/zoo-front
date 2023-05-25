import { Component } from '@angular/core';
import { Animal } from '../animal/animal';
import { AnimalService } from '../animal/animal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public query: string ='';
  public results: Animal[] = [];

  constructor(private animalService:AnimalService) {}

  search(query:string) {

    if(query.length >=3 && query.length<=20){
      this.animalService.searchAnimal(query).subscribe(data=>{
        this.results=data;
      })
    } else {
      this.results = [];
    }
  }

}
