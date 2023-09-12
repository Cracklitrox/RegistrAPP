import { Component, ElementRef, ViewChildren } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-page-welcome-user',
  templateUrl: './waiting-page-welcome-user.page.html',
  styleUrls: ['./waiting-page-welcome-user.page.scss'],
})
export class WaitingPageWelcomeUserPage {
  @ViewChildren('animatedElement', { read: ElementRef }) elements!:
  QueryList<ElementRef<HTMLElement>>;

  private animation!: Animation;
  private elementWaitingPageUser?: Animation;

  constructor(private animationCtrl: AnimationController, private router: Router) {}

  ngAfterViewInit() {
    const element0 = this.elements.first;
    if (element0) {
      this.elementWaitingPageUser = this.animationCtrl
        .create()
        .addElement(element0.nativeElement)
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.3, transform: 'scale(1.2)' },
          { offset: 1, transform: 'scale(1)' },
        ]);
    }

    const animationsToCombine: Animation[] = [this.elementWaitingPageUser].filter(animation => animation !== undefined) as Animation[];
    this.animation = this.animationCtrl
      .create()
      .duration(3000)
      .iterations(1)
      .addAnimation(animationsToCombine);

    this.play();

    this.animation.onFinish(() => {
      this.router.navigate(['/assistance-page']);
    });
  }

  play() {
    this.animation.play();
  }
}
