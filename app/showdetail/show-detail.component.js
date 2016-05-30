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
var router_deprecated_1 = require('@angular/router-deprecated');
var shows_service_1 = require('../shows/shows.service');
var star_component_1 = require('../stars/star.component');
var ShowDetailComponent = (function () {
    function ShowDetailComponent(_showService, _routeParams, _router) {
        this._showService = _showService;
        this._routeParams = _routeParams;
        this._router = _router;
        this.chkPrevious = false;
        this.chkNext = true;
    }
    ShowDetailComponent.prototype.onBack = function () {
        console.log(this.show);
        this._router.navigate(['Shows', { id: this.show.genreId }]);
    };
    ShowDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        this._showService.getShows()
            .subscribe(function (shows) { return _this.show = shows.filter(function (show) { return show.showId === id; })[0]; }, function (error) { return _this.errorMessage = error; });
        this.checkPreviousShow();
        this.checkNextShow();
    };
    ShowDetailComponent.prototype.getTotalShows = function () {
    };
    ShowDetailComponent.prototype.showNext = function () {
        var id = +this._routeParams.get('id');
        console.log(id);
        id++;
        this._router.navigate(['ShowDetail', { id: id }]);
    };
    ShowDetailComponent.prototype.showPrevious = function () {
        var id = +this._routeParams.get('id');
        console.log(id);
        id--;
        this._router.navigate(['ShowDetail', { id: id }]);
    };
    ShowDetailComponent.prototype.checkPreviousShow = function () {
        var id = +this._routeParams.get('id');
        if ((id % 5) != 1) {
            this.chkPrevious = true;
        }
        else {
            this.chkPrevious = false;
        }
    };
    ShowDetailComponent.prototype.checkNextShow = function () {
        var id = +this._routeParams.get('id');
        if ((id % 5) === 0) {
            this.chkNext = false;
        }
        else {
            this.chkNext = true;
        }
    };
    ShowDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/showdetail/show-detail.component.html',
            styleUrls: ['app/showdetail/show-detail.component.css'],
            directives: [star_component_1.StarComponent],
            providers: [shows_service_1.ShowService]
        }), 
        __metadata('design:paramtypes', [shows_service_1.ShowService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], ShowDetailComponent);
    return ShowDetailComponent;
}());
exports.ShowDetailComponent = ShowDetailComponent;
//# sourceMappingURL=show-detail.component.js.map