import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchModule } from './components/search/search.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './pages/weather/weather.module';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    WeatherModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor , multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
