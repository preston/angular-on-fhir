import {ModuleWithProviders, enableProdMode} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ApiComponent} from './components/api.component';
import {AppComponent} from './components/app.component';
import {ClientComponent} from './components/client.component';
import {HomeComponent} from './components/home.component';
import {PatientComponent} from './components/patient.component';

import {ConditionsComponent} from './components/conditions.component';
import {ObservationsComponent} from './components/observations.component';
import {ActivitiesComponent} from './components/activities.component';

import {ClientService} from './services/client.service';
import {EncounterService} from './services/encounter.service';
import {ServerService} from './services/server.service';
import {FhirService} from './services/fhir.service';
import {HealthCreekService} from './services/healthcreek.service';
import {PatientService} from './services/patient.service';
import {SearchService} from './services/search.service';
import {UserService} from './services/user.service';
import {ConditionService} from './services/condition.service';
import {ObservationService} from './services/observation.service';

import {MomentModule} from 'angular2-moment';

enableProdMode();


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'api', component: ApiComponent }
]
const appRoutingProviders: any[] = [];
const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
		MomentModule
    ],       // module dependencies
    declarations: [
        ApiComponent,
        AppComponent,
        ClientComponent,
        HomeComponent,
        PatientComponent,
        ObservationsComponent,
        ConditionsComponent,
        ActivitiesComponent
    ],   // components and directives
    providers: [
        appRoutingProviders,
		ServerService,
        ClientService,
        EncounterService,
		FhirService,
		HealthCreekService,
        PatientService,
        SearchService,
        ObservationService,
        ConditionService,
        UserService
    ],                    // services
    bootstrap: [AppComponent]     // root component
})
export class AppModule {
}
