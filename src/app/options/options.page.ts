import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  darkMode: boolean = false;

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent.getDarkMode().subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

  cambio() {
    this.darkMode = !this.darkMode;
    this.appComponent.comprobarModoOscuro();
  }
}