import { Component,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { TranslatorService } from './translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtubeThumbnail';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' },
    {code:'es',label:'español'},
    {code:'du',label:'Deutsch'},
    {code:'it',label:'Italiano'},
    {code:'ar',label:'عربي'},
    {code:'br',label:'Portuguese'},
  ];

  constructor(private translate: TranslateService,
    private translationService: TranslatorService){
      this.translate.setDefaultLang('en');
      this.translate.use('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  
}
