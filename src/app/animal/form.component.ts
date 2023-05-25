import { Component } from '@angular/core';
import { Animal } from './animal';
import { AnimalService } from './animal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public animal:Animal = new Animal();

  constructor(private animalService: AnimalService) {}

  ngOnInit(){}

  public create(animal:Animal): void{
    this.animalService.createAnimal(animal).subscribe(data=>{
      this.animal=data;
      Swal.fire({
        title: data.commonName +' has been created',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    })
  }

}
