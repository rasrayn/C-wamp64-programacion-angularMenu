import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { Categoria } from '../../interfaces/categorias';

@Component({
  selector: 'app-tarjeta-categoria',
  imports: [CommonModule],
  templateUrl: './tarjeta-categoria.html',
  standalone: true,
  styleUrl: './tarjeta-categoria.css',
})
export class TarjetaCategoria {

  @Input({required: true}) categoria!:Categoria;//exclamacion para decirle a typeScript que categoria va a ser añadido

}
