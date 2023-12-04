import { NgModule } from '@angular/core';
import { ServerModule,ServerTransferStateModule } from '@angular/platform-server';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, Observer } from 'rxjs';
import { readFileSync } from 'fs';

export function universalLoader(): TranslateLoader {
  return {
    getTranslation: (lang: string) => {
      return Observable.create((observer: Observer<any>) => {
        observer.next(JSON.parse(readFileSync(`./dist/youtube-app/browser/assets/i18n/${lang}.json`, 'utf8')));
        observer.complete();
      });
    }
  } as TranslateLoader;
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FlexLayoutServerModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: universalLoader
      }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
