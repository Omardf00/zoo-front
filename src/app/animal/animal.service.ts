import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private urlEndpoint:string = 'http://localhost:8080/api/v1/animal';

  constructor(private http:HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.urlEndpoint}`);
  }

  getAnimalById(id:number): Observable<Animal> {
    return this.http.get<Animal>(`${this.urlEndpoint}` + `/` + id);
  }

  createAnimal(animal:Animal) {
    return this.http.post<Animal>(`${this.urlEndpoint}`, animal);
  }

  searchAnimal(query:string) {
    return this.http.get<Animal[]>(`${this.urlEndpoint}` + "/findByName?query=" + query);
  }

  deleteAnimal(id:number){
    return this.http.delete<string>(`${this.urlEndpoint}` + `/` + id);
  }

  updateAnimal(animal:Animal) {
    return this.http.put<Animal>(`${this.urlEndpoint}`, animal);
  }

}
