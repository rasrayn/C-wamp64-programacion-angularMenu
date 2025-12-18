import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  constructor( private router: Router){
    //Para leer el router y ver si estamos en alguna de las pantallas del menú para poder despues hacer css en los botones donde estemos.
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        console.log("evento", event);
        switch (event.urlAfterRedirects){
          case "":
            this.seleccionado = [true, false, false, false];
            break
          case "/buscar":
            this.seleccionado = [false, true, false, false];
            break
          case "/carrito":
            this.seleccionado = [false, false, true, false];
            break
          case "/perfil":
            this.seleccionado = [false, false, false, true];
            break
          default:
            this.seleccionado = [true, false, false, false];
            break
        }
      }
    })
  }

seleccionado = [false, false, false, false];


// Usamos la funcion navegar en vez de a en el html porque vamos a añadir mas funcionalidades
  navegar(direccion: string) {
    this.router.navigate([direccion])
  }
}
