import { Component, ElementRef, ViewChildren } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-page-login',
  templateUrl: './waiting-page-login.page.html',
  styleUrls: ['./waiting-page-login.page.scss'],
})

export class WaitingPageLoginPage {
  @ViewChildren('animatedElement', { read: ElementRef }) elements!: QueryList<ElementRef<HTMLElement>>;

  private animation!: Animation;
  private elementA?: Animation;

  constructor(
    private animationCtrl: AnimationController,
    private router: Router
    ) {
    }

  ngAfterViewInit() {
    const element0 = this.elements.first;
    if (element0) {
      console.log('Se ha cargado el ngAfterViewInit');
      this.elementA = this.animationCtrl
        .create()
        .addElement(element0.nativeElement)
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.3, transform: 'scale(1.2)' },
          { offset: 1, transform: 'scale(1)' },
        ]);
    }

    const animationsToCombine: Animation[] = [this.elementA].filter(animation => animation !== undefined) as Animation[];
    this.animation = this.animationCtrl
      .create()
      .duration(3000)
      .iterations(1)
      .addAnimation(animationsToCombine);

    this.play();

    this.animation.onFinish(() => {
      console.log('Dirigiendo a la pagina login');
      this.router.navigate(['/login']);
    });
  }

  play() {
    this.animation.play();
  }

  ionViewWillEnter() {
    console.log('Se cargo el ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('Se cargo el ionViewWillLeave');
  }

  ionViewDidEnter() {
    console.log('Se cargo el ionViewDidEnter');
  }

  ionViewDidLeave() {
    console.log('Se cargo el ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('Se cargo el ngOnDestroy')
  }
}