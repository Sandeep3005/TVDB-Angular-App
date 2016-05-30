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
var genre_service_1 = require('./genre.service');
var GenreComponent = (function () {
    function GenreComponent(_genreService) {
        this._genreService = _genreService;
    }
    GenreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._genreService.getGenres()
            .subscribe(function (genres) { return _this.genres = genres; }, function (error) { return _this.errorMessage = error; });
    };
    GenreComponent = __decorate([
        core_1.Component({
            selector: 'genre',
            templateUrl: 'app/genre/genre.component.html',
            styleUrls: ['app/genre/genre.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [genre_service_1.GenreService])
    ], GenreComponent);
    return GenreComponent;
}());
exports.GenreComponent = GenreComponent;
//# sourceMappingURL=genre.component.js.map