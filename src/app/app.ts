import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Tabs } from './components/tabs/tabs';
import { HeaderComponent } from './components/header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Tabs, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angularMenu');
}
