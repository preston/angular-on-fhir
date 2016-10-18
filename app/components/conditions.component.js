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
var condition_service_1 = require("../services/condition.service");
var patient_model_1 = require("../models/patient.model");
var ConditionsComponent = (function () {
    function ConditionsComponent(fhirService, conditionService) {
        this.fhirService = fhirService;
        this.conditionService = conditionService;
        console.log("ConditionsService created...");
    }
    ConditionsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.patient) {
            this.conditionService.index(this.patient).subscribe(function (data) {
                if (data.entry) {
                    _this.conditions = data.entry.map(function (r) { return r['resource']; });
                    console.log("Loaded " + _this.conditions.length + " conditions.");
                }
                else {
                    _this.conditions = new Array();
                    console.log("No conditions for patient.");
                }
            });
        }
    };
    return ConditionsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", patient_model_1.Patient)
], ConditionsComponent.prototype, "patient", void 0);
ConditionsComponent = __decorate([
    core_1.Component({
        selector: 'conditions',
        templateUrl: 'app/components/conditions.html'
    }),
    __metadata("design:paramtypes", [fhir_service_1.FhirService, condition_service_1.ConditionService])
], ConditionsComponent);
exports.ConditionsComponent = ConditionsComponent;
//# sourceMappingURL=conditions.component.js.map