import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  public value: string = ""

  get() {
    return this.value
  }

  set(v: string) {
    this.value = v
  }
}
