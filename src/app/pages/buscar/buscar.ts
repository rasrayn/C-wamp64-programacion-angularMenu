import { Component, inject } from '@angular/core';
import { Header } from '../../servicios/header';

@Component({
  selector: 'app-buscar',
  imports: [],
  templateUrl: './buscar.html',
  styleUrl: './buscar.css',
  standalone: true
})
export class Buscar {
  headerService = inject(Header);

  ngOnInit(): void {
    this.headerService.titulo.set("Buscar");

  }
}
