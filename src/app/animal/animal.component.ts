import { Component } from '@angular/core';
import { Animal } from './animal';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {

  animals: Animal[] = [];

  constructor(private animalService: AnimalService) {
  }

  ngOnInit() {
    this.animalService.getAnimals().subscribe(data=>{
      this.animals = data;
    }
      )

  }

}
