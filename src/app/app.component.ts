import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) menu: IonMenu | undefined;

  constructor(private router: Router) {
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
}