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
var server_service_1 = require("../services/server.service");
var patient_service_1 = require("../services/patient.service");
var PatientComponent = (function () {
    function PatientComponent(fhirService, patientService, compiler) {
        this.fhirService = fhirService;
        this.patientService = patientService;
        this.compiler = compiler;
        this.servers = server_service_1.ServerService.servers;
        this.compiler.clearCache();
        this.selectServer(this.servers[0]);
        this.loadPatients();
    }
    PatientComponent.prototype.loadPatients = function () {
        var _this = this;
        this.patientService.index().subscribe(function (data) {
            _this.patients = data.entry.map(function (r) { return r['resource']; });
            console.log("Loaded " + _this.total() + " patients.");
            if (_this.patients.length > 0) {
                _this.select(_this.patients[0].id);
            }
        });
    };
    PatientComponent.prototype.total = function () {
        var t = 0;
        if (this.patients) {
            t = this.patients.length;
        }
        return t;
    };
    PatientComponent.prototype.select = function (id) {
        var _this = this;
        console.log("Selected patient: " + id);
        this.patientService.get(id).subscribe(function (d) {
            console.log("Fetching: " + d);
            _this.selected = d; //.entry['resource'];
        });
    };
    PatientComponent.prototype.selectServer = function (server) {
        console.log("Setting server to: " + server.url);
        this.server = server;
        this.fhirService.setUrl(server.url);
        this.loadPatients();
    };
    PatientComponent.prototype.selectServerForUrl = function (url) {
        this.selectServer(this.serverFor(url));
    };
    PatientComponent.prototype.serverFor = function (url) {
        var obj = null;
        for (var _i = 0, _a = this.servers; _i < _a.length; _i++) {
            var server = _a[_i];
            if (server.url == url) {
                obj = server;
                break;
            }
        }
        return obj;
    };
    PatientComponent.prototype.genderString = function (patient) {
        var s = 'Unknown';
        switch (patient.gender) {
            case 'female':
                s = 'Female';
                break;
            case 'male':
                s = 'Male';
                break;
        }
        return s;
    };
    return PatientComponent;
}());
PatientComponent = __decorate([
    core_1.Component({
        selector: 'patients',
        templateUrl: 'app/components/patient.html'
    }),
    __metadata("design:paramtypes", [fhir_service_1.FhirService, patient_service_1.PatientService, core_1.Compiler])
], PatientComponent);
exports.PatientComponent = PatientComponent;
//# sourceMappingURL=patient.component.js.map