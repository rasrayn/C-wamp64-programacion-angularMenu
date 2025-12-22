import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../servicios/header';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  standalone: true,
})
export class Menu implements OnInit{
  headerService = inject(Header);

  ngOnInit(): void {
    this.headerService.titulo.set("Menú");
  }
  

}
