import { Component, effect, inject, signal} from '@angular/core';
import { Header } from '../../servicios/header';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone:true,
})
export class HeaderComponent {

  headerService = inject(Header);
  claseAplicada= signal('');
  tituloMostrado = signal('');

  esconderTitulo = effect(() => {
    if(this.headerService.titulo()){
      this.claseAplicada.set('fade-out');
    }
  });//importante para evitar looping, ya que tenemos una señal que cuando cambia cambia a otra señal para añadir una clase al header.

  mostrarTituloNuevo(e:AnimationEvent){
    console.log(e);
    if(e.animationName.includes('fade-out')){
      this.tituloMostrado.set(this.headerService.titulo());
      this.claseAplicada.set('fade-in');
      setTimeout(() => this.claseAplicada.set('') , 500);
    }
  }

}
