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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var healthcreek_service_1 = require('./healthcreek.service');
var ClientService = (function () {
    function ClientService(healthCreekService, http) {
        this.healthCreekService = healthCreekService;
        this.http = http;
        this.path = '/clients';
    }
    ClientService.prototype.index = function () {
        var url = this.healthCreekService.getUrl() + this.path;
        var result = this.http.get(url).map(function (res) { return res.json(); });
        return result;
    };
    ClientService = __decorate([
        core_1.Injectable(),
        core_1.Component({}), 
        __metadata('design:paramtypes', [healthcreek_service_1.HealthCreekService, http_1.Http])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map