import { Component } from '@angular/core';
import { Animal } from './animal';
import { AnimalService } from './animal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {

  animals: Animal[] = [];
  response!: string;

  constructor(private animalService: AnimalService) {
  }

  ngOnInit() {
    this.animalService.getAnimals().subscribe(data=>{
      this.animals = data;
    }
      )

  }

  delete(animal:Animal) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.animalService.deleteAnimal(animal.id).subscribe(data=>{
          this.response = data;
          this.animals = this.animals.filter(ani => ani !== animal)
        })
        Swal.fire(
          'Deleted!',
          animal.commonName + ' has been deleted',
          'success'
        )
      }
    })
  }

}
