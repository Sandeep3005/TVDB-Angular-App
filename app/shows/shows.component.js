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
var shows_service_1 = require('./shows.service');
var router_deprecated_2 = require('@angular/router-deprecated');
var ShowsComponent = (function () {
    function ShowsComponent(_showService, _routeParams, _router) {
        this._showService = _showService;
        this._routeParams = _routeParams;
        this._router = _router;
        this.userVoted = false;
    }
    ShowsComponent.prototype.sortShows = function () {
        this.shows.sort(function (a, b) {
            console.log(a, b);
            var temp;
            var result = b.showVotes - a.showVotes;
            if (result > 0) {
                temp = b.showRank;
                b.showRank = a.showRank;
                a.showRank = temp;
            }
            console.log(result);
            return result;
        });
        return this.shows;
    };
    ShowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //.filter(show => show.showId === this.showId)[0],
        var genreId = +this._routeParams.get('id');
        this._showService.getShows()
            .subscribe(function (shows) { return _this.shows = shows.filter(function (show) { return show.genreId === genreId; }); }, function (error) { return _this.errorMessage = error; });
    };
    ShowsComponent.prototype.VoteUp = function (show) {
        console.log(show);
        show.showVotes++;
        this.userVoted = true;
        return false;
    };
    ShowsComponent.prototype.VoteDown = function (show) {
        console.log(show);
        show.showVotes--;
        this.userVoted = false;
        return false;
    };
    ShowsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/shows/shows.component.html',
            styleUrls: ['app/shows/shows.component.css'],
            directives: [router_deprecated_2.ROUTER_DIRECTIVES],
            providers: [shows_service_1.ShowService]
        }), 
        __metadata('design:paramtypes', [shows_service_1.ShowService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], ShowsComponent);
    return ShowsComponent;
}());
exports.ShowsComponent = ShowsComponent;
//# sourceMappingURL=shows.component.js.map