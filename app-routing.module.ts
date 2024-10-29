import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalComponent } from './global/global.component';
import { PricesComponent } from './prices/prices.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { AboutComponent } from './about/about.component';
import { ConferencesComponent } from './conferences/conferences.component';

const routes: Routes = [
  { path: '', component: GlobalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'conferences', component: ConferencesComponent },
  { path: 'prices', component: PricesComponent },

  { path: 'privacyPolicies', component: PrivacyPoliciesComponent },
  { path: 'termsConditions', component: TermsConditionsComponent },
  { path: 'cancellationPolicy', component: CancellationPolicyComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'sponsorship', component: SponsorshipComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirect any unknown paths to home


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
