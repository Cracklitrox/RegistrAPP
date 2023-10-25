import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-credential',
  templateUrl: './virtual-credential.page.html',
  styleUrls: ['./virtual-credential.page.scss'],
})
export class VirtualCredentialPage implements OnInit {
  alumnoDetalles: any;

  constructor() {
    this.alumnoDetalles = JSON.parse(localStorage.getItem('alumnoDetalles') || '{}');
  }

  ngOnInit() {
  }

}
