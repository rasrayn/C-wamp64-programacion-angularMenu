import { inject, Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categorias';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Categorias {
  
  //metodo para obtener todas las categorias
  private url = './data/database.json';

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<any[]>(this.url);
  }
  
}
