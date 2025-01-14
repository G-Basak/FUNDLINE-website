import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NPSComponent } from './nps/nps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsuranceComponent,
    MutualFundComponent,
    ContactUsComponent,
    NPSComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'mutual-fund',
        component: MutualFundComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'insurance',
        component: InsuranceComponent,
      },
      {
        path: 'nps',
        component: NPSComponent,
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
