import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../servicios/header';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
  standalone: true,
})
export class Perfil implements OnInit{

  headerService = inject(Header);

  ngOnInit() {
    this.headerService.titulo.set('Perfil');

  }
}
