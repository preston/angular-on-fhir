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
var fhir_service_1 = require("../services/fhir.service");
var patient_model_1 = require("../models/patient.model");
var ActivitiesComponent = (function () {
    function ActivitiesComponent(fhirService) {
        this.fhirService = fhirService;
        console.log("ActivityService created...");
    }
    return ActivitiesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", patient_model_1.Patient)
], ActivitiesComponent.prototype, "patient", void 0);
ActivitiesComponent = __decorate([
    core_1.Component({
        selector: 'activities',
        templateUrl: 'app/components/activities.html'
    }),
    __metadata("design:paramtypes", [fhir_service_1.FhirService])
], ActivitiesComponent);
exports.ActivitiesComponent = ActivitiesComponent;
//# sourceMappingURL=activities.component.js.map