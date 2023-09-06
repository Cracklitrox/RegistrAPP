import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-waiting-page-login',
  templateUrl: './waiting-page-login.page.html',
  styleUrls: ['./waiting-page-login.page.scss'],
})
export class WaitingPageLoginPage implements OnInit {

  constructor(private router: Router, private animationCtrl: AnimationController) { }

  ngOnInit() {
    const delay = 4000;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, delay);
  }

  ionViewWillEnter() {
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
      const enterAnimation = this.animationCtrl.create()
        .addElement(logoContainer)
        .duration(500)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(10px)', 'translateY(0)');

      enterAnimation.play();
    }
  }

  ionViewWillLeave() {
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
      const leaveAnimation = this.animationCtrl.create()
        .addElement(logoContainer)
        .duration(500)
        .fromTo('opacity', '1', '0');

      leaveAnimation.play();
    }
  }

}