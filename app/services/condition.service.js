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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var fhir_service_1 = require("./fhir.service");
var ConditionService = (function () {
    // private conditions;
    // private options: Headers = new Headers;["Accept: application/json";
    function ConditionService(fhirService, http) {
        this.fhirService = fhirService;
        this.http = http;
        this.path = '/Condition';
        console.log("ConditionService created...");
    }
    ConditionService.prototype.index = function (patient) {
        var url = this.fhirService.getUrl() + this.path + "?patient=" + patient.id;
        // console.log("ESNUTH");
        return this.http.get(url, this.fhirService.options()).map(function (res) { return res.json(); });
    };
    return ConditionService;
}());
ConditionService = __decorate([
    core_1.Injectable(),
    core_1.Component({}),
    __metadata("design:paramtypes", [fhir_service_1.FhirService, http_1.Http])
], ConditionService);
exports.ConditionService = ConditionService;
//# sourceMappingURL=condition.service.js.map