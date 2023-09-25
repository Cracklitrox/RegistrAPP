import { Component, HostListener, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonMenu } from '@ionic/angular';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isDarkMode = false;

  @ViewChild(IonMenu) menu: IonMenu | undefined;

  constructor(private router: Router, private databaseService: DatabaseService) {
    this.detectThemeChange()
  }

  navigateToPage(page: string) {
    this.router.navigateByUrl(`/${page}`);
    if (this.menu && !this.menu.disabled) {
      this.menu.close();
    }
  }

  detectThemeChange() {
    const esTemaOscuro = localStorage.getItem('tema') === 'oscuro';
    this.isDarkMode = esTemaOscuro;
  }

  @HostListener('window:themeChange', ['$event'])
  onThemeChange(event: any) {
    this.detectThemeChange();
  }

  ngAfterViewInit() {
    if (this.menu) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (this.menu && !this.menu.disabled) {
            this.menu.close();
          }
        }
      });
    }
  }
}