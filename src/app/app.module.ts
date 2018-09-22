import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { FrontComponent } from './pages/front/front.component';
import { ArticleComponent } from './pages/article/article.component';

import { RoutingModule } from './routing/routing.module';

export function initializeConfig(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      deps: [AppConfig],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
