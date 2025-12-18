import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Tabs } from './components/tabs/tabs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('angularMenu');
}
