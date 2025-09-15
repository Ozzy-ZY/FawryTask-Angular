import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Feed } from "./components/feed/feed";
@Component({
  selector: 'app-root',
  imports: [CommonModule, Navbar, Feed],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FawryTask');
}
