import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-credential',
  templateUrl: './virtual-credential.page.html',
  styleUrls: ['./virtual-credential.page.scss'],
})
export class VirtualCredentialPage implements OnInit {
  usuarioDetalles: any;

  constructor() {
    this.usuarioDetalles = JSON.parse(localStorage.getItem('usuarioDetalles') || '{}');
  }

  ngOnInit() {
  }

}
