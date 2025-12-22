import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Header {
    titulo = signal("titulo");
    extendido = signal(false);
}



