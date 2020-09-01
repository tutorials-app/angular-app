import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  themeChange = new EventEmitter();

  isDarkMode: Boolean = false;

  constructor() { }

  enableDarkMode() {
    this.isDarkMode = true;
    this.themeChange.emit( this.getIsDarkMode());
  }

  disableDarkMode() {
    this.isDarkMode = false;
    this.themeChange.emit( this.getIsDarkMode());
  }

  getIsDarkMode() {
    return this.isDarkMode;
  }
}
