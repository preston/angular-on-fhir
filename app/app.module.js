"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var api_component_1 = require("./components/api.component");
var app_component_1 = require("./components/app.component");
var client_component_1 = require("./components/client.component");
var home_component_1 = require("./components/home.component");
var patient_component_1 = require("./components/patient.component");
var conditions_component_1 = require("./components/conditions.component");
var observations_component_1 = require("./components/observations.component");
var activities_component_1 = require("./components/activities.component");
var client_service_1 = require("./services/client.service");
var encounter_service_1 = require("./services/encounter.service");
var server_service_1 = require("./services/server.service");
var fhir_service_1 = require("./services/fhir.service");
var healthcreek_service_1 = require("./services/healthcreek.service");
var patient_service_1 = require("./services/patient.service");
var search_service_1 = require("./services/search.service");
var user_service_1 = require("./services/user.service");
var condition_service_1 = require("./services/condition.service");
var observation_service_1 = require("./services/observation.service");
var angular2_moment_1 = require("angular2-moment");
core_1.enableProdMode();
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'api', component: api_component_1.ApiComponent }
];
var appRoutingProviders = [];
var routing = router_1.RouterModule.forRoot(appRoutes);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_2.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            routing,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular2_moment_1.MomentModule
        ],
        declarations: [
            api_component_1.ApiComponent,
            app_component_1.AppComponent,
            client_component_1.ClientComponent,
            home_component_1.HomeComponent,
            patient_component_1.PatientComponent,
            observations_component_1.ObservationsComponent,
            conditions_component_1.ConditionsComponent,
            activities_component_1.ActivitiesComponent
        ],
        providers: [
            appRoutingProviders,
            server_service_1.ServerService,
            client_service_1.ClientService,
            encounter_service_1.EncounterService,
            fhir_service_1.FhirService,
            healthcreek_service_1.HealthCreekService,
            patient_service_1.PatientService,
            search_service_1.SearchService,
            observation_service_1.ObservationService,
            condition_service_1.ConditionService,
            user_service_1.UserService
        ],
        bootstrap: [app_component_1.AppComponent] // root component
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map