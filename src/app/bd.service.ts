import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class BdService {

  constructor( private storage: Storage) {
    this.init();
  }

  async init() {

    const storage = await this.storage.create();

    this.storage = storage;
  }


  async set(key: string, value: any) {
    return this.storage.set(key, value);
  }

  async get(key: string) {
    return this.storage.get(key);
  }

  async remove(key: string) {
    return this.storage.remove(key);
  }

  async clear() {
    return this.storage.clear();
  }

  async keys() {
    return this.storage.keys();
  }

  async length() {
    return this.storage.length();
  }
}

