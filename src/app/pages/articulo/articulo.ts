import { Component, inject } from '@angular/core';
import { Header } from '../../servicios/header';

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.html',
  styleUrl: './articulo.css',
  standalone: true,
})
export class Articulo {
  headerService = inject(Header);

  ngOnInit(): void {
    this.headerService.titulo.set("Producto");

  }
}
