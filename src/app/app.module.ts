import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from "./pages/pages.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandlingInterceptorService } from './services/error-handling-interceptor.service';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    HttpClientModule,
    NgxEditorModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{
    provide:'apiUrl',useValue:'https://sheltered-wave-32884.herokuapp.com/api'
  },{
provide:HTTP_INTERCEPTORS, useClass:ErrorHandlingInterceptorService,multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
