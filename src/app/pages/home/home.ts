import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Header } from '../../servicios/header';
import { Categorias } from '../../servicios/categorias';
import { Categoria } from '../../interfaces/categorias';



@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone:true,
})
export class Home implements OnInit, OnDestroy {
  Categorias:Categoria[] = [];
  headerService = inject(Header);
  categoriaService = inject(Categorias);
  
  ngOnInit(): void {
    this.headerService.extendido.set(true);
    this.headerService.titulo.set("Inicio");
    this.categoriaService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.Categorias = data;
      },
      error:(err) =>{
       console.error('Error al cargar categorías', err); 
      }
    });
  }

  ngOnDestroy(): void {
    this.headerService.extendido.set(false);
  }
}
