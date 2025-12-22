import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../servicios/header';

@Component({
  selector: 'app-carrito',
  imports: [],
  standalone:true,
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit{
  headerService = inject(Header);

  ngOnInit(): void {
    this.headerService.titulo.set("Carrito");
  }
}
