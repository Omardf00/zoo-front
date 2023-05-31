import { Component } from '@angular/core';
import { Animal } from './animal';
import { AnimalService } from './animal.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public animal:Animal = new Animal();

  constructor(private animalService: AnimalService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.loadAnimal();
  }

  public create(animal:Animal): void{
    this.animalService.createAnimal(animal).subscribe(data=>{
      this.animal=data;
      this.router.navigate(['/animals']);
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

  public loadAnimal(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.animalService.getAnimalById(id).subscribe( (animal) => this.animal = animal);
      }
    })
  }

  public update():void {
    this.animalService.updateAnimal(this.animal).subscribe(animal =>{
      this.router.navigate(['/animals']);
      Swal.fire({
        title: 'Animal has been updated',
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
