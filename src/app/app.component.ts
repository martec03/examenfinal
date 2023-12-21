import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { liveQuery } from 'dexie';
import { db } from '../../shared/db';
import { Parabola } from '../../shared/paraboras.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,PiepaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi Proyecto';
  listaparabolas = liveQuery(() => db.parabola.toArray());
  parabola : Parabola[] = [];

  constructor() {
    this.listaparabolas.subscribe(
      (parabola) => {
        this.parabola = parabola;
        console.log(parabola)},
      (error) => {console.log(error)}
    );
  }
}
