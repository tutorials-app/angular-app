import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Option } from "../option.model";
import { ThemeService } from "../theme.service";
import { DarkModeService } from "../dark-mode.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();
  isDarkMode = this.darkModeService.getIsDarkMode();

  constructor(
    private readonly themeService: ThemeService,
    private darkModeService: DarkModeService,
  ) { }

  ngOnInit(): void {
    this.themeService.setTheme("light");
    this.isDarkMode = this.darkModeService.getIsDarkMode();
    // this.darkModeService.disableDarkMode();
  }

  themeChangeHandler(themeToSet) {
    console.log(themeToSet);
    if (themeToSet === "dark") this.darkModeService.enableDarkMode();
    else this.darkModeService.disableDarkMode();
    this.themeService.setTheme(themeToSet);
    this.isDarkMode = this.darkModeService.getIsDarkMode();
  }
}
