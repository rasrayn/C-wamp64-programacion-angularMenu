import { Component, OnDestroy, OnInit, inject, } from '@angular/core';
import { Header } from '../../servicios/header';
import { Categorias } from '../../servicios/categorias';
import { Categoria } from '../../interfaces/categorias';
import { TarjetaCategoria } from "../../components/tarjeta-categoria/tarjeta-categoria";
import { CommonModule } from '@angular/common';
import {  RouterModule } from "@angular/router";


@Component({
  selector: 'app-home',
  imports: [TarjetaCategoria, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone:true,
})
export class Home implements OnInit, OnDestroy {
  categorias:Categoria[] = [];
  headerService = inject(Header);
  categoriaService = inject(Categorias);
  
  ngOnInit(): void {
    this.headerService.extendido.set(true);
    this.headerService.titulo.set("Inicio");
    this.categoriaService.getAll().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log(this.categorias);
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
