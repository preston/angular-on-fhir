import {enableProdMode} from '@angular/core';

import {ApiComponent} from './api/api.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PatientComponent} from './patient/patient.component';

import {ConditionsComponent} from './conditions/conditions.component';
import {ObservationsComponent} from './observations/observations.component';

import {FhirService} from './services/fhir.service';

import {MomentModule} from 'ngx-moment';

enableProdMode();


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { AppRoutingModule } from './app-routing.module';
import { AllergiesComponent } from './allergies/allergies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
		MomentModule,
        HttpClientModule,
        NgbModule
        // OAuthModule.forRoot()
    ],       // module dependencies
    declarations: [
        ApiComponent,
        AppComponent,
        HomeComponent,
        PatientComponent,
        ObservationsComponent,
        ConditionsComponent,
        AllergiesComponent
    ],   // components and directives
    providers: [
		FhirService
    ],                    // services
    bootstrap: [AppComponent]     // root component
})
export class AppModule {
}
