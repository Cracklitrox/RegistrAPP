import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { Animation } from '@ionic/angular';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-waiting-page-logout',
  templateUrl: './waiting-page-logout.page.html',
  styleUrls: ['./waiting-page-logout.page.scss'],
})
export class WaitingPageLogoutPage implements OnInit {
  @ViewChildren('animatedElement', { read: ElementRef }) elements!: QueryList<ElementRef<HTMLElement>>;

  private animation!: Animation;
  private elementWaitingPageLogout?: Animation;
  correoInstitucional: string = '';

  constructor(private animationCtrl: AnimationController, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.correoInstitucional = this.userService.getNombreCorreoInstitucional();
  }

  ngAfterViewInit() {
    const element0 = this.elements.first;
    if (element0) {
      this.elementWaitingPageLogout = this.animationCtrl.create()
        .addElement(element0.nativeElement)
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.3, transform: 'scale(1.2)' },
          { offset: 1, transform: 'scale(1)' },
        ])
        .keyframes([
          { offset: 0, opacity: 0 },
          { offset: 1, opacity: 1 },
        ]);
    }

    const animationsToCombine: Animation[] = [this.elementWaitingPageLogout].filter(animation => animation !== undefined) as Animation[];
    this.animation = this.animationCtrl.create()
      .duration(3000)
      .iterations(1)
      .addAnimation(animationsToCombine);

    this.play();

    this.animation.onFinish(() => {
      this.router.navigate(['/login']);
    });
  }

  play() {
    this.animation.play();
  }
}