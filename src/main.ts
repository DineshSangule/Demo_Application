import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  

bootstrapApplication(AppComponent,{
  providers:[provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync()]
   
  
} )
.catch((err) => console.error(err));
