import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DarkModeService } from './dark-mode.service';

@Directive({
  selector: '[appDarkMode]'
})
export class DarkModeDirective implements OnInit {
  @Input('appDarkMode') isDarkMode: boolean;

  private unsubscribe = new Subject();
  constructor(private el: ElementRef, private darkModeService: DarkModeService) {  }

  ngOnInit() {
    const isDarkMode = this.darkModeService.getIsDarkMode();
    this.updateElementClass(isDarkMode);

    this.darkModeService.themeChange.pipe(takeUntil(this.unsubscribe))
      .subscribe((isDarkMode) => this.updateElementClass(isDarkMode));
  }

  updateElementClass(isDarkMode) {
    if (isDarkMode) this.el.nativeElement.classList.add('dark-mode');
    else this.el.nativeElement.classList.remove('dark-mode');
  }
}
