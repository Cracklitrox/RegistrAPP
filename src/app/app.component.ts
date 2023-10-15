import { Component, ViewChild, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonMenu } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) menu: IonMenu | undefined;

  private darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.comprobarModoOscuro();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.comprobarModoOscuro();
      }
    })
  }

  navigateToPage(page: string) {
    this.router.navigateByUrl(`/${page}`);
    if (this.menu && !this.menu.disabled) {
      this.menu.close();
    }
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

  comprobarModoOscuro() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark);
    if (prefersDark.matches) {
      document.body.classList.toggle( 'dark' );
      this.darkMode.next(true);
    } else {
      this.darkMode.next(false);
    }
  }

  getDarkMode() {
    return this.darkMode.asObservable();
  }
}