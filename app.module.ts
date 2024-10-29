import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './global/global.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PricesComponent } from './prices/prices.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { AboutComponent } from './about/about.component';
import { ConferencesComponent } from './conferences/conferences.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    HeaderComponent,
    FooterComponent,
    PricesComponent,
    PrivacyPoliciesComponent,
    TermsConditionsComponent,
    CancellationPolicyComponent,
    GuidelinesComponent,
    SponsorshipComponent,
    AboutComponent,
    ConferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
