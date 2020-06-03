(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ5", function() { return ɵ5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ6", function() { return ɵ6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ7", function() { return ɵ7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ8", function() { return ɵ8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ9", function() { return ɵ9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ10", function() { return ɵ10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ11", function() { return ɵ11; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_events_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/events/events.component */ "./src/app/pages/events/events.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_career_career_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/career/career.component */ "./src/app/pages/career/career.component.ts");
/* harmony import */ var _pages_team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/team/team.component */ "./src/app/pages/team/team.component.ts");
/* harmony import */ var _pages_services_robotics_robotics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/services/robotics/robotics.component */ "./src/app/pages/services/robotics/robotics.component.ts");
/* harmony import */ var _pages_projects_lighty_lighty_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/projects/lighty/lighty.component */ "./src/app/pages/projects/lighty/lighty.component.ts");
/* harmony import */ var _pages_services_iot_iot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/services/iot/iot.component */ "./src/app/pages/services/iot/iot.component.ts");












const ɵ0 = { animation: '' }, ɵ1 = { animation: 'home' }, ɵ2 = { animation: 'projects' }, ɵ3 = { animation: 'projects' }, ɵ4 = { animation: 'services' }, ɵ5 = { animation: 'services' }, ɵ6 = { animation: 'services' }, ɵ7 = { animation: 'paeventsge' }, ɵ8 = { animation: 'about-us' }, ɵ9 = { animation: 'contact-us' }, ɵ10 = { animation: 'team' }, ɵ11 = { animation: 'career' };
const routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/'
    }, {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: ɵ0
    }, {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: ɵ1
    }, {
        path: 'projects',
        component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"],
        data: ɵ2
    }, {
        path: 'projects/lighty',
        component: _pages_projects_lighty_lighty_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsLightyComponent"],
        data: ɵ3
    }, {
        path: 'services',
        component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"],
        data: ɵ4
    }, {
        path: 'services/robotics',
        component: _pages_services_robotics_robotics_component__WEBPACK_IMPORTED_MODULE_9__["ServicesRoboticsComponent"],
        data: ɵ5
    }, {
        path: 'services/iot',
        component: _pages_services_iot_iot_component__WEBPACK_IMPORTED_MODULE_11__["ServicesIotComponent"],
        data: ɵ6
    }, {
        path: 'events',
        component: _pages_events_events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"],
        data: ɵ7
    },
    {
        path: 'about-us',
        component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"],
        data: ɵ8
    },
    {
        path: 'contact-us',
        component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"],
        data: ɵ9
    },
    {
        path: 'team',
        component: _pages_team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"],
        data: ɵ10
    },
    {
        path: 'career',
        component: _pages_career_career_component__WEBPACK_IMPORTED_MODULE_7__["CareerComponent"],
        data: ɵ11
    }
];
class AppRoutingModule {
}



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/loader/loader.component.ngfactory */ "./src/app/shared/components/loader/loader.component.ngfactory.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _partials_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/sidebar/sidebar.component.ngfactory */ "./src/app/partials/sidebar/sidebar.component.ngfactory.js");
/* harmony import */ var _partials_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/sidebar/sidebar.component */ "./src/app/partials/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/sidebar.service */ "./src/app/shared/services/sidebar.service.ts");
/* harmony import */ var _partials_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/header/header.component.ngfactory */ "./src/app/partials/header/header.component.ngfactory.js");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _partials_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./partials/footer/footer.component.ngfactory */ "./src/app/partials/footer/footer.component.ngfactory.js");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: { "animation": [{ type: 7, name: "routeAnimations", definitions: [{ type: 1, expr: "* <=> *", animation: [{ type: 11, selector: ":leave", animation: [{ type: 6, styles: { opacity: 0, display: "none" }, offset: null }], options: { optional: true } }, { type: 11, selector: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "0.5s" }], options: { optional: true } }], options: null }], options: {} }] } });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loader", [], null, null, null, _shared_components_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LoaderComponent_0"], _shared_components_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], [_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "main", [["class", "app-main"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-sidebar", [["class", "app-sidebar"]], null, null, null, _partials_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SidebarComponent_0"], _partials_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SidebarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _partials_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], [_shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_7__["SidebarService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-header", [["class", "app-header sticky"]], null, null, null, _partials_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_HeaderComponent_0"], _partials_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _partials_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], [_shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_7__["SidebarService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "app-container"]], [[24, "@routeAnimations", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 212992, [["outlet", 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "app-footer", [["class", "app-footer"]], null, null, null, _partials_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_FooterComponent_0"], _partials_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 114688, null, 0, _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 4, 0); _ck(_v, 6, 0); _ck(_v, 9, 0); _ck(_v, 11, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.prepareRoute(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)); _ck(_v, 7, 0, currVal_0); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.app-header.fixed[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFx3d3ctbm9kZVxcd2Vic2l0ZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREdJO0VBQ0ksMkNBQUE7RUFDQSx1Q0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuICAgICYuZml4ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmLCAkYWxwaGE6IDAuODUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMSk7XHJcbiAgICB9XHJcbn0iLCIuYXBwLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYXBwLWhlYWRlci5maXhlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
class AppComponent {
    constructor() {
        this.title = 'website';
    }
    prepareRoute(outlet) {
        //return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _pages_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component.ngfactory */ "./src/app/pages/home/home.component.ngfactory.js");
/* harmony import */ var _pages_projects_projects_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/projects/projects.component.ngfactory */ "./src/app/pages/projects/projects.component.ngfactory.js");
/* harmony import */ var _pages_projects_lighty_lighty_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/projects/lighty/lighty.component.ngfactory */ "./src/app/pages/projects/lighty/lighty.component.ngfactory.js");
/* harmony import */ var _pages_services_services_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/services/services.component.ngfactory */ "./src/app/pages/services/services.component.ngfactory.js");
/* harmony import */ var _pages_services_robotics_robotics_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/services/robotics/robotics.component.ngfactory */ "./src/app/pages/services/robotics/robotics.component.ngfactory.js");
/* harmony import */ var _pages_services_iot_iot_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/services/iot/iot.component.ngfactory */ "./src/app/pages/services/iot/iot.component.ngfactory.js");
/* harmony import */ var _pages_events_events_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/events/events.component.ngfactory */ "./src/app/pages/events/events.component.ngfactory.js");
/* harmony import */ var _pages_about_us_about_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about-us/about-us.component.ngfactory */ "./src/app/pages/about-us/about-us.component.ngfactory.js");
/* harmony import */ var _pages_contact_us_contact_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component.ngfactory */ "./src/app/pages/contact-us/contact-us.component.ngfactory.js");
/* harmony import */ var _pages_team_team_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/team/team.component.ngfactory */ "./src/app/pages/team/team.component.ngfactory.js");
/* harmony import */ var _pages_career_career_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/career/career.component.ngfactory */ "./src/app/pages/career/career.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_loader_Interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/services/loader.Interceptor */ "./src/app/shared/services/loader.Interceptor.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/services/sidebar.service */ "./src/app/shared/services/sidebar.service.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _pages_projects_lighty_lighty_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/projects/lighty/lighty.component */ "./src/app/pages/projects/lighty/lighty.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_services_robotics_robotics_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/services/robotics/robotics.component */ "./src/app/pages/services/robotics/robotics.component.ts");
/* harmony import */ var _pages_services_iot_iot_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/services/iot/iot.component */ "./src/app/pages/services/iot/iot.component.ts");
/* harmony import */ var _pages_events_events_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/events/events.component */ "./src/app/pages/events/events.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_team_team_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/team/team.component */ "./src/app/pages/team/team.component.ts");
/* harmony import */ var _pages_career_career_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/career/career.component */ "./src/app/pages/career/career.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _pages_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["HomeComponentNgFactory"], _pages_projects_projects_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponentNgFactory"], _pages_projects_lighty_lighty_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ProjectsLightyComponentNgFactory"], _pages_services_services_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ServicesComponentNgFactory"], _pages_services_robotics_robotics_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ServicesRoboticsComponentNgFactory"], _pages_services_iot_iot_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ServicesIotComponentNgFactory"], _pages_events_events_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["EventsComponentNgFactory"], _pages_about_us_about_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponentNgFactory"], _pages_contact_us_contact_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponentNgFactory"], _pages_team_team_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["TeamComponentNgFactory"], _pages_career_career_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["CareerComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_18__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_18__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_18__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_18__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_18__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_18__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_20__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_22__["LoaderService"], _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_22__["LoaderService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], function (p0_0, p1_0) { return [p0_0, new _shared_services_loader_Interceptor__WEBPACK_IMPORTED_MODULE_23__["LoaderInterceptor"](p1_0)]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_h"], _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_22__["LoaderService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_24__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_24__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_25__["SidebarService"], _shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_25__["SidebarService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_26__["SlickCarouselModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_26__["SlickCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_30__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_30__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_31__["SmoothScrollModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_31__["SmoothScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_31__["NgScrollbarModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_31__["NgScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_24__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_16__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_16__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_16__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_16__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTES"], function () { return [[{ path: "", pathMatch: "full", redirectTo: "/" }, { path: "", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_32__["HomeComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ0"] }, { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_32__["HomeComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ1"] }, { path: "projects", component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_34__["ProjectsComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ2"] }, { path: "projects/lighty", component: _pages_projects_lighty_lighty_component__WEBPACK_IMPORTED_MODULE_35__["ProjectsLightyComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ3"] }, { path: "services", component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_36__["ServicesComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ4"] }, { path: "services/robotics", component: _pages_services_robotics_robotics_component__WEBPACK_IMPORTED_MODULE_37__["ServicesRoboticsComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ5"] }, { path: "services/iot", component: _pages_services_iot_iot_component__WEBPACK_IMPORTED_MODULE_38__["ServicesIotComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ6"] }, { path: "events", component: _pages_events_events_component__WEBPACK_IMPORTED_MODULE_39__["EventsComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ7"] }, { path: "about-us", component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_40__["AboutUsComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ8"] }, { path: "contact-us", component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_41__["ContactUsComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ9"] }, { path: "team", component: _pages_team_team_component__WEBPACK_IMPORTED_MODULE_42__["TeamComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ10"] }, { path: "career", component: _pages_career_career_component__WEBPACK_IMPORTED_MODULE_43__["CareerComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ11"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
class AppModule {
}


/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_AboutUsComponent, View_AboutUsComponent_0, View_AboutUsComponent_Host_0, AboutUsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AboutUsComponent", function() { return RenderType_AboutUsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutUsComponent_0", function() { return View_AboutUsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutUsComponent_Host_0", function() { return View_AboutUsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponentNgFactory", function() { return AboutUsComponentNgFactory; });
/* harmony import */ var _about_us_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.component.scss.shim.ngstyle */ "./src/app/pages/about-us/about-us.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AboutUsComponent = [_about_us_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AboutUsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AboutUsComponent, data: {} });

function View_AboutUsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["about-us works!"]))], null, null); }
function View_AboutUsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-about-us", [], null, null, null, View_AboutUsComponent_0, RenderType_AboutUsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AboutUsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-about-us", _about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"], View_AboutUsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.scss.shim.ngstyle.js ***!
  \************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/pages/career/career.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/pages/career/career.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_CareerComponent, View_CareerComponent_0, View_CareerComponent_Host_0, CareerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CareerComponent", function() { return RenderType_CareerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CareerComponent_0", function() { return View_CareerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CareerComponent_Host_0", function() { return View_CareerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponentNgFactory", function() { return CareerComponentNgFactory; });
/* harmony import */ var _career_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./career.component.scss.shim.ngstyle */ "./src/app/pages/career/career.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _career_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./career.component */ "./src/app/pages/career/career.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_CareerComponent = [_career_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CareerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CareerComponent, data: {} });

function View_CareerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["career works!"]))], null, null); }
function View_CareerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-career", [], null, null, null, View_CareerComponent_0, RenderType_CareerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _career_component__WEBPACK_IMPORTED_MODULE_2__["CareerComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CareerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-career", _career_component__WEBPACK_IMPORTED_MODULE_2__["CareerComponent"], View_CareerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/career/career.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/pages/career/career.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmVlci9jYXJlZXIuY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/pages/career/career.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/career/career.component.ts ***!
  \**************************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class CareerComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_ContactUsComponent, View_ContactUsComponent_0, View_ContactUsComponent_Host_0, ContactUsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactUsComponent", function() { return RenderType_ContactUsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactUsComponent_0", function() { return View_ContactUsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactUsComponent_Host_0", function() { return View_ContactUsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponentNgFactory", function() { return ContactUsComponentNgFactory; });
/* harmony import */ var _contact_us_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.component.scss.shim.ngstyle */ "./src/app/pages/contact-us/contact-us.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ContactUsComponent = [_contact_us_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactUsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactUsComponent, data: {} });

function View_ContactUsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "page-contact-us min-vh-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "col bg-image-two"]], null, null, null, null, null))], null, null); }
function View_ContactUsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contact-us", [], null, null, null, View_ContactUsComponent_0, RenderType_ContactUsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contact_us_component__WEBPACK_IMPORTED_MODULE_2__["ContactUsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContactUsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contact-us", _contact_us_component__WEBPACK_IMPORTED_MODULE_2__["ContactUsComponent"], View_ContactUsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.scss.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.scss.shim.ngstyle.js ***!
  \****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/pages/events/events.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/pages/events/events.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_EventsComponent, View_EventsComponent_0, View_EventsComponent_Host_0, EventsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EventsComponent", function() { return RenderType_EventsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EventsComponent_0", function() { return View_EventsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EventsComponent_Host_0", function() { return View_EventsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponentNgFactory", function() { return EventsComponentNgFactory; });
/* harmony import */ var _events_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.component.scss.shim.ngstyle */ "./src/app/pages/events/events.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.component */ "./src/app/pages/events/events.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_EventsComponent = [_events_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EventsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EventsComponent, data: {} });

function View_EventsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["events works!"]))], null, null); }
function View_EventsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-events", [], null, null, null, View_EventsComponent_0, RenderType_EventsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EventsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-events", _events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"], View_EventsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/events/events.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/pages/events/events.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/pages/events/events.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/events/events.component.ts ***!
  \**************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class EventsComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/pages/home/home.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/pages/home/home.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/pages/home/home.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _node_modules_ngx_slick_carousel_ngx_slick_carousel_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/ngx-slick-carousel/ngx-slick-carousel.ngfactory */ "./node_modules/ngx-slick-carousel/ngx-slick-carousel.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "slide p-4"], ["ngxSlickItem", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "background-color": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickItemDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "slide-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "slide-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, _v.context.$implicit.color); _ck(_v, 2, 0, currVal_0); _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_1); var currVal_2 = _v.context.$implicit.subtitle; _ck(_v, 8, 0, currVal_2); }); }
function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 175, "div", [["class", "page-home"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "section", [["class", "main-banner min-vh-100 bg-image-banner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "container mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "col align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "ngx-slick-carousel", [["class", "carousel main-carousel"]], null, null, null, _node_modules_ngx_slick_carousel_ngx_slick_carousel_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SlickCarouselComponent_0"], _node_modules_ngx_slick_carousel_ngx_slick_carousel_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SlickCarouselComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 13287424, [["slickModal", 4]], 0, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { config: [0, "config"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HomeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 107, "section", [["class", "section section-services bg-image-shape"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 106, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "div", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "p", [["class", "section-title-ghost"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Our Services"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "p", [["class", "section-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Our Services"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 23, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "div", [["class", "col-12 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "img", [["src", "../../../assets/images/service-iot.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 18, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Internet of Things"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 8, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Smart Home & Offices"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Smart Garden & Parking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Realtime Tracking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Indoor & Outdoor Tracking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 6, "a", [["class", "read-more"], ["routerLinkActive", "router-link-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](36, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Read More"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 14, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 3, "div", [["class", "col-12 col-md-6 order-lg-last"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 0, "img", [["src", "../../../assets/images/service-ai.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 9, "div", [["class", "col-12 col-md-6 align-self-center text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Artificial Intelligence"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 6, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Machine Learning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Deep Learning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Face Recognition"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 14, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 3, "div", [["class", "col-12 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 0, "img", [["src", "../../../assets/images/service-robotics.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 9, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Robotics"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 6, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Drone Design & Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DOF Robots Design & Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customized Robots Design"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 14, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 3, "div", [["class", "col-12 col-md-6 order-lg-last"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 0, "img", [["src", "../../../assets/images/service-voice.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 9, "div", [["class", "col-12 col-md-6 align-self-center text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Voice Integration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 6, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amazon Alexa"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Google Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Apple Siri"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 14, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 3, "div", [["class", "col-12 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 0, "img", [["src", "../../../assets/images/service-api.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 9, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["API Development & Integration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 6, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Graph QL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Rest API"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Microservices"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 16, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 3, "div", [["class", "col-12 col-md-6 order-lg-last"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 0, "img", [["src", "../../../assets/images/service-web.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 11, "div", [["class", "col-12 col-md-6 align-self-center text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mobile/Web Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 8, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Native Android & iOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["React Native, Flutter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Angular, React, Vue"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Laravel, Zend, Codeigniter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 50, "section", [["class", "section section-projects bg-image-shape"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 4, "div", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 1, "p", [["class", "section-title-ghost"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Projects"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 1, "p", [["class", "section-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Projects"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, null, 43, "div", [["class", "container p-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, null, 23, "div", [["class", "row projects-list "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, null, 3, "div", [["class", "col-12 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](128, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 0, "img", [["src", "../../../assets/images/project-2.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 18, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["LIGHTY"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 8, "ul", [["class", "service-topics mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Connect Smart devices, Turn on/off"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Scene, Automation, Timers"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sharing access, Power Consumption"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer Support, Help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, null, 6, "a", [["class", "read-more"], ["routerLinkActive", "router-link-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](144, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](145, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](146, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Read More"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 18, "div", [["class", "row projects-list "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, null, 3, "div", [["class", "col-12 col-md-6 order-lg-last"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](154, 0, null, null, 0, "img", [["src", "../../../assets/images/project-4.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 13, "div", [["class", "col-12 col-md-6 align-self-center  text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Gadget Shop"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 8, "ul", [["class", "service-topics mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](159, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Search scooter, Booking, History"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](161, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sharing Key, Wallet, Pay"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](163, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Promotions, Reward points"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer Support, Help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](167, 0, null, null, 1, "a", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comming Soon"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](169, 0, null, null, 6, "section", [["class", "section section-get-in-touch"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](170, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, null, 4, "div", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 1, "p", [["class", "section-title-ghost"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Get in touch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, null, 1, "p", [["class", "section-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Get in touch"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.slideConfig; _ck(_v, 7, 0, currVal_0); var currVal_1 = _co.slides; _ck(_v, 9, 0, currVal_1); var currVal_4 = _ck(_v, 36, 0, "/services/iot"); _ck(_v, 35, 0, currVal_4); var currVal_5 = "router-link-active"; _ck(_v, 37, 0, currVal_5); var currVal_8 = _ck(_v, 145, 0, "/projects/lighty"); _ck(_v, 144, 0, currVal_8); var currVal_9 = "router-link-active"; _ck(_v, 146, 0, currVal_9); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).href; _ck(_v, 34, 0, currVal_2, currVal_3); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).href; _ck(_v, 143, 0, currVal_6, currVal_7); }); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/home.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n.slick-list[_ngcontent-%COMP%], .slick-slider[_ngcontent-%COMP%], .slick-track[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.slick-loading[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%], .slick-loading[_ngcontent-%COMP%]   .slick-track[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.slick-slider[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -khtml-user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n.slick-list[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n.slick-list[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.slick-list.dragging[_ngcontent-%COMP%] {\n  cursor: pointer;\n  cursor: hand;\n}\n.slick-slider[_ngcontent-%COMP%]   .slick-list[_ngcontent-%COMP%], .slick-slider[_ngcontent-%COMP%]   .slick-track[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n}\n.slick-track[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n}\n.slick-track[_ngcontent-%COMP%]:after, .slick-track[_ngcontent-%COMP%]:before {\n  display: table;\n  content: \"\";\n}\n.slick-track[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n.slick-slide[_ngcontent-%COMP%] {\n  display: none;\n  float: left;\n  height: 100%;\n  min-height: 1px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%] {\n  float: right;\n}\n.slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n}\n.slick-slide.slick-loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n}\n.slick-slide.dragging[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.slick-initialized[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%] {\n  display: block;\n}\n.slick-vertical[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%] {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.slick-dots[_ngcontent-%COMP%], .slick-next[_ngcontent-%COMP%], .slick-prev[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  padding: 0;\n}\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before, .slick-next[_ngcontent-%COMP%]:before, .slick-prev[_ngcontent-%COMP%]:before {\n  font-family: slick;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-next[_ngcontent-%COMP%], .slick-prev[_ngcontent-%COMP%] {\n  font-size: 0;\n  line-height: 0;\n  top: 50%;\n  width: 20px;\n  height: 20px;\n  transform: translate(0, -50%);\n  cursor: pointer;\n  color: transparent;\n  border: none;\n  outline: 0;\n  background: 0 0;\n}\n.slick-next[_ngcontent-%COMP%]:focus, .slick-next[_ngcontent-%COMP%]:hover, .slick-prev[_ngcontent-%COMP%]:focus, .slick-prev[_ngcontent-%COMP%]:hover {\n  color: transparent;\n  outline: 0;\n  background: 0 0;\n}\n.slick-next[_ngcontent-%COMP%]:focus:before, .slick-next[_ngcontent-%COMP%]:hover:before, .slick-prev[_ngcontent-%COMP%]:focus:before, .slick-prev[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n}\n.slick-next.slick-disabled[_ngcontent-%COMP%]:before, .slick-prev.slick-disabled[_ngcontent-%COMP%]:before {\n  opacity: 0.25;\n}\n.slick-next[_ngcontent-%COMP%]:before, .slick-prev[_ngcontent-%COMP%]:before {\n  font-size: 20px;\n  line-height: 1;\n  opacity: 0.75;\n  color: #fff;\n}\n.slick-prev[_ngcontent-%COMP%] {\n  left: -25px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .slick-prev[_ngcontent-%COMP%] {\n  right: -25px;\n  left: auto;\n}\n.slick-prev[_ngcontent-%COMP%]:before {\n  content: \"\u00E2\u2020\u0090\";\n}\n.slick-next[_ngcontent-%COMP%]:before, [dir=rtl][_ngcontent-%COMP%]   .slick-prev[_ngcontent-%COMP%]:before {\n  content: \"\u00E2\u2020\u2019\";\n}\n.slick-next[_ngcontent-%COMP%] {\n  right: -25px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .slick-next[_ngcontent-%COMP%] {\n  right: auto;\n  left: -25px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .slick-next[_ngcontent-%COMP%]:before {\n  content: \"\u00E2\u2020\u0090\";\n}\n.slick-dotted.slick-slider[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.slick-dots[_ngcontent-%COMP%] {\n  bottom: -25px;\n  width: 100%;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n}\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0;\n  line-height: 0;\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 5px;\n  cursor: pointer;\n  color: transparent;\n  border: 0;\n  outline: 0;\n  background: 0 0;\n}\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus:before, .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n}\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n  font-size: 6px;\n  line-height: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  content: \"\u00E2\u20AC\u00A2\";\n  text-align: center;\n  opacity: 0.25;\n  color: #000;\n}\n.slick-dots[_ngcontent-%COMP%]   li.slick-active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n  opacity: 0.75;\n  color: #000;\n}\n\n\n.slideshow[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n.slideshow[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vw;\n  z-index: 2;\n}\n.slideshow[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  outline: none;\n}\n.slideshow[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n  overflow: hidden;\n  border: none;\n}\n.slideshow[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: none;\n}\n.slideshow[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 101%;\n  min-height: 101%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.slideshow[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  width: 40px;\n  height: auto;\n  bottom: auto;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n  left: auto;\n  color: #fff;\n  display: block;\n}\n.slideshow[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.slideshow[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 20px;\n  height: 15px;\n  text-align: center;\n}\n.slideshow[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: #fff;\n  color: #fff;\n  height: 2px;\n  width: 20px;\n  border-radius: 0;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: auto;\n  transform: translateY(-50%);\n  transition: all 0.3s ease-in-out;\n  opacity: 0.6;\n}\n.slideshow[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li.slick-active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n  width: 40px;\n  opacity: 1;\n}\n.slideshow.slideshow-right[_ngcontent-%COMP%] {\n  left: 0;\n  z-index: 1;\n  width: 50vw;\n  pointer-events: none;\n}\n.slideshow.slideshow-right[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  left: 0;\n  position: absolute;\n}\n.slideshow-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  font-size: 80px;\n  width: 100vw;\n  text-align: center;\n  color: #fff;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 100;\n  pointer-events: none;\n  text-transform: uppercase;\n  letter-spacing: 20px;\n  line-height: 0.8;\n}\n@media (max-width: 767px) {\n  .slideshow-text[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n.the-most[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  left: 0;\n  width: 50vw;\n  max-width: 200px;\n  padding: 10px;\n}\n.the-most[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.form-get-in-touch[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  height: 4rem;\n}\n.icon-scroll[_ngcontent-%COMP%], .icon-scroll[_ngcontent-%COMP%]:before {\n  position: absolute;\n  left: 50%;\n}\n.icon-scroll[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 80px;\n  margin: 0rem auto;\n  box-shadow: inset 0 0 0 2px #000;\n  border-radius: 25px;\n  transform: translate(-50%, -50%);\n}\n.icon-scroll[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  background: #000;\n  margin-left: -4px;\n  top: 8px;\n  border-radius: 4px;\n  -webkit-animation-duration: 1.5s;\n  animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: scroll;\n  animation-name: scroll;\n}\n@-webkit-keyframes scroll {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(46px);\n  }\n}\n@keyframes scroll {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(46px);\n  }\n}\n.banner-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: inherit;\n  z-index: 0;\n}\n.p-5[_ngcontent-%COMP%] {\n  padding: 5rem;\n}\n.main-carousel[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 32%;\n  z-index: 1;\n}\n.carousel[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  outline: none;\n}\n.slide-title[_ngcontent-%COMP%] {\n  color: #000;\n}\n.slide-subtitle[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n  color: #000;\n  letter-spacing: 4px;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=slick-theme.min.css.map */\n/*# sourceMappingURL=slick.min.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL0Q6XFxQcm9qZWN0c1xcd3d3LW5vZGVcXHdlYnNpdGUvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7O0VBR0ksa0JBQUE7RUFDQSxjQUFBO0FERUo7QUNDQTs7RUFFSSxrQkFBQTtBREVKO0FDQ0E7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUVBLG1CQUFBO0VBQ0Esd0NBQUE7QURFSjtBQ0NBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBREVKO0FDQ0E7RUFDSSxVQUFBO0FERUo7QUNDQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FERUo7QUNDQTs7RUFNSSwrQkFBQTtBREVKO0FDQ0E7RUFDSSxNQUFBO0VBQ0EsT0FBQTtBREVKO0FDQ0E7O0VBRUksY0FBQTtFQUNBLFdBQUE7QURFSjtBQ0NBO0VBQ0ksV0FBQTtBREVKO0FDQ0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FERUo7QUNDQTtFQUNJLFlBQUE7QURFSjtBQ0NBO0VBQ0ksY0FBQTtBREVKO0FDQ0E7RUFDSSxhQUFBO0FERUo7QUNDQTtFQUNJLG9CQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7QURFSjtBQ0NBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBREVKO0FDQ0E7RUFDSSxhQUFBO0FERUo7QUNDQTs7O0VBR0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBREVKO0FDQ0E7OztFQUdJLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREVKO0FDS0E7O0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFHQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBREZKO0FDS0E7Ozs7RUFJSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FERko7QUNLQTs7OztFQUlJLFVBQUE7QURGSjtBQ0tBOztFQUVJLGFBQUE7QURGSjtBQ0tBOztFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QURGSjtBQ0tBO0VBQ0ksV0FBQTtBREZKO0FDS0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBREZKO0FDS0E7RUFDSSxjQUFBO0FERko7QUNLQTs7RUFFSSxjQUFBO0FERko7QUNLQTtFQUNJLFlBQUE7QURGSjtBQ0tBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QURGSjtBQ0tBO0VBQ0ksY0FBQTtBREZKO0FDS0E7RUFDSSxtQkFBQTtBREZKO0FDS0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FERko7QUNLQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBREZKO0FDS0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QURGSjtBQ0tBOztFQUVJLFVBQUE7QURGSjtBQ0tBOztFQUVJLFVBQUE7QURGSjtBQ0tBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QURGSjtBQ0tBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QURGSjtBQ01BLDhDQUFBO0FBR0Esd0NBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRE5KO0FDT0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QURMUjtBQ01RO0VBQ0ksYUFBQTtBREpaO0FDTVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FESlo7QUNLWTtFQUNJLGFBQUE7QURIaEI7QUNLWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBREhoQjtBQ09JO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FETFI7QUNNUTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBREpaO0FDS1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURIaEI7QUNJZ0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QURGcEI7QUNPb0I7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBREx4QjtBQ1dJO0VBQ0ksT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QURUUjtBQ1VRO0VBQ0ksT0FBQTtFQUNBLGtCQUFBO0FEUlo7QUNhQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBRFZKO0FDV0k7RUFoQko7SUFpQlEsZUFBQTtFRFJOO0FBQ0Y7QUNXQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FEUko7QUNTSTtFQUNJLGVBQUE7QURQUjtBQ1lJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FEVFI7QUNhQTs7RUFFSSxrQkFBQTtFQUNBLFNBQUE7QURWSjtBQ2FBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBRFZKO0FDYUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FEVko7QUNhQTtFQUNJO0lBQ0ksVUFBQTtFRFZOO0VDWUU7SUFDSSxVQUFBO0lBRUEsMkJBQUE7RURWTjtBQUNGO0FDYUE7RUFDSTtJQUNJLFVBQUE7RURYTjtFQ2FFO0lBQ0ksVUFBQTtJQUVBLDJCQUFBO0VEWE47QUFDRjtBQ2NBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBRFpKO0FDZUE7RUFDSSxhQUFBO0FEWko7QUNlQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBRFpKO0FDZUE7RUFDSSxhQUFBO0FEWko7QUNlQTtFQUNJLFdBQUE7QURaSjtBQ2VBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRFpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnNsaWNrLWxpc3QsXG4uc2xpY2stc2xpZGVyLFxuLnNsaWNrLXRyYWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXNsaWRlLFxuLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXRyYWNrIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc2xpY2stc2xpZGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xuICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2xpY2stbGlzdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNsaWNrLWxpc3Q6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uc2xpY2stbGlzdC5kcmFnZ2luZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xufVxuXG4uc2xpY2stc2xpZGVyIC5zbGljay1saXN0LFxuLnNsaWNrLXNsaWRlciAuc2xpY2stdHJhY2sge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi5zbGljay10cmFjayB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnNsaWNrLXRyYWNrOmFmdGVyLFxuLnNsaWNrLXRyYWNrOmJlZm9yZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uc2xpY2stdHJhY2s6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnNsaWNrLXNsaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMXB4O1xufVxuXG5bZGlyPXJ0bF0gLnNsaWNrLXNsaWRlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2xpY2stc2xpZGUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbGljay1zbGlkZS5zbGljay1sb2FkaW5nIGltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGljay1zbGlkZS5kcmFnZ2luZyBpbWcge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpY2stdmVydGljYWwgLnNsaWNrLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5zbGljay1hcnJvdy5zbGljay1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpY2stZG90cyxcbi5zbGljay1uZXh0LFxuLnNsaWNrLXByZXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2xpY2stZG90cyBsaSBidXR0b246YmVmb3JlLFxuLnNsaWNrLW5leHQ6YmVmb3JlLFxuLnNsaWNrLXByZXY6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IHNsaWNrO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLnNsaWNrLW5leHQsXG4uc2xpY2stcHJldiB7XG4gIGZvbnQtc2l6ZTogMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiAwIDA7XG59XG5cbi5zbGljay1uZXh0OmZvY3VzLFxuLnNsaWNrLW5leHQ6aG92ZXIsXG4uc2xpY2stcHJldjpmb2N1cyxcbi5zbGljay1wcmV2OmhvdmVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiAwIDA7XG59XG5cbi5zbGljay1uZXh0OmZvY3VzOmJlZm9yZSxcbi5zbGljay1uZXh0OmhvdmVyOmJlZm9yZSxcbi5zbGljay1wcmV2OmZvY3VzOmJlZm9yZSxcbi5zbGljay1wcmV2OmhvdmVyOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGljay1uZXh0LnNsaWNrLWRpc2FibGVkOmJlZm9yZSxcbi5zbGljay1wcmV2LnNsaWNrLWRpc2FibGVkOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDAuMjU7XG59XG5cbi5zbGljay1uZXh0OmJlZm9yZSxcbi5zbGljay1wcmV2OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2xpY2stcHJldiB7XG4gIGxlZnQ6IC0yNXB4O1xufVxuXG5bZGlyPXJ0bF0gLnNsaWNrLXByZXYge1xuICByaWdodDogLTI1cHg7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi5zbGljay1wcmV2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiw6LigKDCkFwiO1xufVxuXG4uc2xpY2stbmV4dDpiZWZvcmUsXG5bZGlyPXJ0bF0gLnNsaWNrLXByZXY6YmVmb3JlIHtcbiAgY29udGVudDogXCLDouKAoOKAmVwiO1xufVxuXG4uc2xpY2stbmV4dCB7XG4gIHJpZ2h0OiAtMjVweDtcbn1cblxuW2Rpcj1ydGxdIC5zbGljay1uZXh0IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0yNXB4O1xufVxuXG5bZGlyPXJ0bF0gLnNsaWNrLW5leHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLDouKAoMKQXCI7XG59XG5cbi5zbGljay1kb3R0ZWQuc2xpY2stc2xpZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnNsaWNrLWRvdHMge1xuICBib3R0b206IC0yNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGljay1kb3RzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAwO1xuICBsaW5lLWhlaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogMCAwO1xufVxuXG4uc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXMsXG4uc2xpY2stZG90cyBsaSBidXR0b246aG92ZXIge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXM6YmVmb3JlLFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmhvdmVyOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmUge1xuICBmb250LXNpemU6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjb250ZW50OiBcIsOi4oKswqJcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjI1O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnNsaWNrLWRvdHMgbGkuc2xpY2stYWN0aXZlIGJ1dHRvbjpiZWZvcmUge1xuICBvcGFjaXR5OiAwLjc1O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c2xpY2stdGhlbWUubWluLmNzcy5tYXAgKi9cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWNrLm1pbi5jc3MubWFwICovXG4uc2xpZGVzaG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zbGlkZXNob3cgLnNsaWRlciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2dztcbiAgei1pbmRleDogMjtcbn1cbi5zbGlkZXNob3cgLnNsaWRlciAqIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zbGlkZXNob3cgLnNsaWRlciAuaXRlbSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IG5vbmU7XG59XG4uc2xpZGVzaG93IC5zbGlkZXIgLml0ZW0gLnRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNsaWRlc2hvdyAuc2xpZGVyIC5pdGVtIGltZyB7XG4gIG1pbi13aWR0aDogMTAxJTtcbiAgbWluLWhlaWdodDogMTAxJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5zbGlkZXNob3cgLnNsaWNrLWRvdHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogYXV0bztcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNsaWRlc2hvdyAuc2xpY2stZG90cyBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnNsaWRlc2hvdyAuc2xpY2stZG90cyBsaSBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zbGlkZXNob3cgLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwLjY7XG59XG4uc2xpZGVzaG93IC5zbGljay1kb3RzIGxpLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3JlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2xpZGVzaG93LnNsaWRlc2hvdy1yaWdodCB7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiA1MHZ3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zbGlkZXNob3cuc2xpZGVzaG93LXJpZ2h0IC5zbGlkZXIge1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zbGlkZXNob3ctdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDEwMDtcbiAgZm9udC1zaXplOiA4MHB4O1xuICB3aWR0aDogMTAwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zbGlkZXNob3ctdGV4dCB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5cbi50aGUtbW9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTB2dztcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi50aGUtbW9zdCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWdldC1pbi10b3VjaCAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogMXJlbSAxLjI1cmVtO1xuICBoZWlnaHQ6IDRyZW07XG59XG5cbi5pY29uLXNjcm9sbCxcbi5pY29uLXNjcm9sbDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmljb24tc2Nyb2xsIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiAwcmVtIGF1dG87XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmljb24tc2Nyb2xsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNjcm9sbDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNjcm9sbDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNjcm9sbCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ2cHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ2cHgpO1xuICB9XG59XG4uYmFubmVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgei1pbmRleDogMDtcbn1cblxuLnAtNSB7XG4gIHBhZGRpbmc6IDVyZW07XG59XG5cbi5tYWluLWNhcm91c2VsIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDMyJTtcbiAgei1pbmRleDogMTtcbn1cblxuLmNhcm91c2VsICoge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnNsaWRlLXN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGNvbG9yOiAjMDAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn0iLCIuc2xpY2stbGlzdCxcclxuLnNsaWNrLXNsaWRlcixcclxuLnNsaWNrLXRyYWNrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuXHJcbi5zbGljay1sb2FkaW5nIC5zbGljay1zbGlkZSxcclxuLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXRyYWNrIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlblxyXG59XHJcblxyXG4uc2xpY2stc2xpZGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbiAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4uc2xpY2stbGlzdCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMFxyXG59XHJcblxyXG4uc2xpY2stbGlzdDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwXHJcbn1cclxuXHJcbi5zbGljay1saXN0LmRyYWdnaW5nIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGN1cnNvcjogaGFuZFxyXG59XHJcblxyXG4uc2xpY2stc2xpZGVyIC5zbGljay1saXN0LFxyXG4uc2xpY2stc2xpZGVyIC5zbGljay10cmFjayB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApXHJcbn1cclxuXHJcbi5zbGljay10cmFjayB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwXHJcbn1cclxuXHJcbi5zbGljay10cmFjazphZnRlcixcclxuLnNsaWNrLXRyYWNrOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNvbnRlbnQ6ICcnXHJcbn1cclxuXHJcbi5zbGljay10cmFjazphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aFxyXG59XHJcblxyXG4uc2xpY2stc2xpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMXB4XHJcbn1cclxuXHJcbltkaXI9cnRsXSAuc2xpY2stc2xpZGUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0XHJcbn1cclxuXHJcbi5zbGljay1zbGlkZSBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuLnNsaWNrLXNsaWRlLnNsaWNrLWxvYWRpbmcgaW1nIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLnNsaWNrLXNsaWRlLmRyYWdnaW5nIGltZyB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxyXG59XHJcblxyXG4uc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuXHJcbi5zbGljay12ZXJ0aWNhbCAuc2xpY2stc2xpZGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4uc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLnNsaWNrLWRvdHMsXHJcbi5zbGljay1uZXh0LFxyXG4uc2xpY2stcHJldiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZSxcclxuLnNsaWNrLW5leHQ6YmVmb3JlLFxyXG4uc2xpY2stcHJldjpiZWZvcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IHNsaWNrO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlXHJcbn1cclxuXHJcbi5zbGljay1sb2FkaW5nIC5zbGljay1saXN0IHtcclxuICAgIC8vYmFja2dyb3VuZDogdXJsKGFqYXgtbG9hZGVyLmdpZikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQgI2ZmZlxyXG59XHJcblxyXG4uc2xpY2stbmV4dCxcclxuLnNsaWNrLXByZXYge1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQ6IDAgMFxyXG59XHJcblxyXG4uc2xpY2stbmV4dDpmb2N1cyxcclxuLnNsaWNrLW5leHQ6aG92ZXIsXHJcbi5zbGljay1wcmV2OmZvY3VzLFxyXG4uc2xpY2stcHJldjpob3ZlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZDogMCAwXHJcbn1cclxuXHJcbi5zbGljay1uZXh0OmZvY3VzOmJlZm9yZSxcclxuLnNsaWNrLW5leHQ6aG92ZXI6YmVmb3JlLFxyXG4uc2xpY2stcHJldjpmb2N1czpiZWZvcmUsXHJcbi5zbGljay1wcmV2OmhvdmVyOmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAxXHJcbn1cclxuXHJcbi5zbGljay1uZXh0LnNsaWNrLWRpc2FibGVkOmJlZm9yZSxcclxuLnNsaWNrLXByZXYuc2xpY2stZGlzYWJsZWQ6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IC4yNVxyXG59XHJcblxyXG4uc2xpY2stbmV4dDpiZWZvcmUsXHJcbi5zbGljay1wcmV2OmJlZm9yZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG9wYWNpdHk6IC43NTtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5zbGljay1wcmV2IHtcclxuICAgIGxlZnQ6IC0yNXB4XHJcbn1cclxuXHJcbltkaXI9cnRsXSAuc2xpY2stcHJldiB7XHJcbiAgICByaWdodDogLTI1cHg7XHJcbiAgICBsZWZ0OiBhdXRvXHJcbn1cclxuXHJcbi5zbGljay1wcmV2OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnw6LigKDCkCdcclxufVxyXG5cclxuLnNsaWNrLW5leHQ6YmVmb3JlLFxyXG5bZGlyPXJ0bF0gLnNsaWNrLXByZXY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICfDouKAoOKAmSdcclxufVxyXG5cclxuLnNsaWNrLW5leHQge1xyXG4gICAgcmlnaHQ6IC0yNXB4XHJcbn1cclxuXHJcbltkaXI9cnRsXSAuc2xpY2stbmV4dCB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6IC0yNXB4XHJcbn1cclxuXHJcbltkaXI9cnRsXSAuc2xpY2stbmV4dDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ8Oi4oCgwpAnXHJcbn1cclxuXHJcbi5zbGljay1kb3R0ZWQuc2xpY2stc2xpZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHhcclxufVxyXG5cclxuLnNsaWNrLWRvdHMge1xyXG4gICAgYm90dG9tOiAtMjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uc2xpY2stZG90cyBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5zbGljay1kb3RzIGxpIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZDogMCAwXHJcbn1cclxuXHJcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpmb2N1cyxcclxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDBcclxufVxyXG5cclxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmZvY3VzOmJlZm9yZSxcclxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmhvdmVyOmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAxXHJcbn1cclxuXHJcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGNvbnRlbnQ6ICfDouKCrMKiJztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IC4yNTtcclxuICAgIGNvbG9yOiAjMDAwXHJcbn1cclxuXHJcbi5zbGljay1kb3RzIGxpLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IC43NTtcclxuICAgIGNvbG9yOiAjMDAwXHJcbn1cclxuXHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zbGljay10aGVtZS5taW4uY3NzLm1hcCAqL1xyXG5cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWNrLm1pbi5jc3MubWFwICovXHJcblxyXG4uc2xpZGVzaG93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuc2xpZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2dztcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAxJTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMSU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWNrLWRvdHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJvdHRvbTogYXV0bztcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuc2xpY2stYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLnNsaWRlc2hvdy1yaWdodCB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2xpZGVzaG93LXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aGUtbW9zdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tZ2V0LWluLXRvdWNoIHtcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pY29uLXNjcm9sbCxcclxuLmljb24tc2Nyb2xsOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5pY29uLXNjcm9sbCB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogMHJlbSBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5pY29uLXNjcm9sbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2Nyb2xsO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNjcm9sbDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjcm9sbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDZweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ2cHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDZweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ2cHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFubmVyLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuLnAtNSB7XHJcbiAgICBwYWRkaW5nOiA1cmVtO1xyXG59XHJcblxyXG4ubWFpbi1jYXJvdXNlbCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMyJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCAqIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zbGlkZS10aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnNsaWRlLXN1YnRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class HomeComponent {
    constructor(http, loader) {
        this.http = http;
        this.loader = loader;
        this.slides = [
            { title: "Create your own success story.", subtitle: "Life is a journey not a destination.", color: '' },
            { title: "Done is better than perfect.", subtitle: "One day at a time.", color: '' },
            { title: "Enjoy the simple moments of life.", subtitle: "Sometimes the wrong choices brings us to the right places.", color: '' },
            { title: "Have less. Do more, Be More.", subtitle: "The best things in life come with patience.", color: '' }
        ];
        this.slideConfig = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            arrows: false,
        };
    }
    ngOnInit() {
        //this.loader.show();
    }
    onClick() {
        this.http.get("https://restcountries.eu/rest/v2/").subscribe((r) => {
            console.log(r);
        });
    }
}


/***/ }),

/***/ "./src/app/pages/projects/lighty/lighty.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/pages/projects/lighty/lighty.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_ProjectsLightyComponent, View_ProjectsLightyComponent_0, View_ProjectsLightyComponent_Host_0, ProjectsLightyComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProjectsLightyComponent", function() { return RenderType_ProjectsLightyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProjectsLightyComponent_0", function() { return View_ProjectsLightyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProjectsLightyComponent_Host_0", function() { return View_ProjectsLightyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsLightyComponentNgFactory", function() { return ProjectsLightyComponentNgFactory; });
/* harmony import */ var _lighty_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lighty.component.scss.shim.ngstyle */ "./src/app/pages/projects/lighty/lighty.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lighty_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lighty.component */ "./src/app/pages/projects/lighty/lighty.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ProjectsLightyComponent = [_lighty_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProjectsLightyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProjectsLightyComponent, data: {} });

function View_ProjectsLightyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 50, "div", [["class", "container page-margin-top bg-image-shape"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 49, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h1", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lighty"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["class", "col-12 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["src", "../../../assets/images/project-2.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 9, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "ul", [["class", "service-topics mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Connect Smart devices, Turn on/off"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Scene, Automation, Timers"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sharing access, Power Consumption"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer Support, Help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 31, "div", [["class", "col-12 align-self-center p-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 16, "article", [["class", "service-article"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "span", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Features"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 12, "ul", [["class", "service-topics mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User can turn on/off lights, fan, ac and other applicances"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User can manage Scenes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User can manage Timers for auto turn on/off"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User can share light access to others"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User can know Power Consumption in reports"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer Support, Help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 6, "article", [["class", "service-article"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "span", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Technology"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "ul", [["class", "service-topics mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NodeJs, Angular, Mysql, Redis, Flutter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 6, "article", [["class", "service-article"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "span", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Usage areas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "ul", [["class", "service-topics mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Office, Homes, Restorents, Bars, Shops, Apartments"]))], null, null); }
function View_ProjectsLightyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-services-lighty", [], null, null, null, View_ProjectsLightyComponent_0, RenderType_ProjectsLightyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _lighty_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsLightyComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProjectsLightyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-services-lighty", _lighty_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsLightyComponent"], View_ProjectsLightyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/projects/lighty/lighty.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/projects/lighty/lighty.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".service-article[_ngcontent-%COMP%] {\n  margin: 1rem 0 4rem 0;\n}\n.service-article[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvbGlnaHR5L0Q6XFxQcm9qZWN0c1xcd3d3LW5vZGVcXHdlYnNpdGUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9qZWN0c1xcbGlnaHR5XFxsaWdodHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL2xpZ2h0eS9saWdodHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvbGlnaHR5L2xpZ2h0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlLWFydGljbGUge1xyXG4gICAgbWFyZ2luOiAxcmVtIDAgNHJlbSAwO1xyXG4gICAgKiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxufSIsIi5zZXJ2aWNlLWFydGljbGUge1xuICBtYXJnaW46IDFyZW0gMCA0cmVtIDA7XG59XG4uc2VydmljZS1hcnRpY2xlICoge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/projects/lighty/lighty.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/projects/lighty/lighty.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsLightyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsLightyComponent", function() { return ProjectsLightyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ProjectsLightyComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/pages/projects/projects.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_ProjectsComponent, View_ProjectsComponent_0, View_ProjectsComponent_Host_0, ProjectsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProjectsComponent", function() { return RenderType_ProjectsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProjectsComponent_0", function() { return View_ProjectsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProjectsComponent_Host_0", function() { return View_ProjectsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponentNgFactory", function() { return ProjectsComponentNgFactory; });
/* harmony import */ var _projects_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component.scss.shim.ngstyle */ "./src/app/pages/projects/projects.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/pages/projects/projects.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ProjectsComponent = [_projects_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProjectsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProjectsComponent, data: {} });

function View_ProjectsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 51, "div", [["class", "container page-margin-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 50, "section", [["class", "section section-projects bg-image-shape"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "section-title-ghost"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Projects"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "p", [["class", "section-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Projects"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 43, "div", [["class", "container p-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 23, "div", [["class", "row projects-list "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "div", [["class", "col-12 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "img", [["src", "../../../assets/images/project-2.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 18, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["LIGHTY"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 8, "ul", [["class", "service-topics mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Connect Smart devices, Turn on/off"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Scene, Automation, Timers"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sharing access, Power Consumption"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer Support, Help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 6, "a", [["class", "read-more"], ["routerLinkActive", "router-link-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](28, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Read More"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 18, "div", [["class", "row projects-list "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 3, "div", [["class", "col-12 col-md-6 order-lg-last"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "img", [["src", "../../../assets/images/project-4.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 13, "div", [["class", "col-12 col-md-6 align-self-center  text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Gadget Shop"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 8, "ul", [["class", "service-topics mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Search scooter, Booking, History"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sharing Key, Wallet, Pay"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Promotions, Reward points"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer Support, Help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "a", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comming Soon"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 28, 0, "/projects/lighty"); _ck(_v, 27, 0, currVal_2); var currVal_3 = "router-link-active"; _ck(_v, 29, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).href; _ck(_v, 26, 0, currVal_0, currVal_1); }); }
function View_ProjectsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-projects", [], null, null, null, View_ProjectsComponent_0, RenderType_ProjectsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProjectsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-projects", _projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], View_ProjectsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss.shim.ngstyle.js ***!
  \************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["grid[_ngcontent-%COMP%] {\n  background: red;\n  position: absolute;\n  z-index: 1;\n  cursor: pointer;\n  display: flex;\n  padding: 10px;\n  width: 3000px;\n  height: 2000px;\n  flex-wrap: wrap;\n  background: #fff;\n  justify-content: space-around;\n  align-items: space-around;\n  cursor: drag;\n}\n@media (max-width: 500px) {\n  grid[_ngcontent-%COMP%] {\n    width: 1400px;\n    height: 1400px;\n  }\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 10px;\n  flex: 1 1 20%;\n  counter-increment: box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-family: sans-serif;\n  font-size: 30px;\n  overflow: hidden;\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 2;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  transform-origin: center;\n  transition: transform 0.6s cubic-bezier(0.42, 0, 0.1, 1);\n}\n.dragging[_ngcontent-%COMP%]   grid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:after {\n  transform: scale(0.99);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(1):after {\n  background-image: url(https://source.unsplash.com/collection/11/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(2):after {\n  background-image: url(https://source.unsplash.com/collection/12/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(3):after {\n  background-image: url(https://source.unsplash.com/collection/13/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(4):after {\n  background-image: url(https://source.unsplash.com/collection/14/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(5):after {\n  background-image: url(https://source.unsplash.com/collection/15/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(6):after {\n  background-image: url(https://source.unsplash.com/collection/16/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(7):after {\n  background-image: url(https://source.unsplash.com/collection/17/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(8):after {\n  background-image: url(https://source.unsplash.com/collection/18/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(9):after {\n  background-image: url(https://source.unsplash.com/collection/19/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(10):after {\n  background-image: url(https://source.unsplash.com/collection/110/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(11):after {\n  background-image: url(https://source.unsplash.com/collection/111/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(12):after {\n  background-image: url(https://source.unsplash.com/collection/112/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(13):after {\n  background-image: url(https://source.unsplash.com/collection/113/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(14):after {\n  background-image: url(https://source.unsplash.com/collection/114/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(15):after {\n  background-image: url(https://source.unsplash.com/collection/115/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(16):after {\n  background-image: url(https://source.unsplash.com/collection/116/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(17):after {\n  background-image: url(https://source.unsplash.com/collection/117/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(18):after {\n  background-image: url(https://source.unsplash.com/collection/118/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(19):after {\n  background-image: url(https://source.unsplash.com/collection/119/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(20):after {\n  background-image: url(https://source.unsplash.com/collection/120/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(21):after {\n  background-image: url(https://source.unsplash.com/collection/121/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(22):after {\n  background-image: url(https://source.unsplash.com/collection/122/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(23):after {\n  background-image: url(https://source.unsplash.com/collection/123/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(24):after {\n  background-image: url(https://source.unsplash.com/collection/124/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(25):after {\n  background-image: url(https://source.unsplash.com/collection/125/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(26):after {\n  background-image: url(https://source.unsplash.com/collection/126/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(27):after {\n  background-image: url(https://source.unsplash.com/collection/127/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(28):after {\n  background-image: url(https://source.unsplash.com/collection/128/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(29):after {\n  background-image: url(https://source.unsplash.com/collection/129/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(30):after {\n  background-image: url(https://source.unsplash.com/collection/130/800x800);\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(3n+2) {\n  flex: 1 1 10%;\n}\ngrid[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:before {\n  content: counter(box);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvRDpcXFByb2plY3RzXFx3d3ctbm9kZVxcd2Vic2l0ZS9zcmNcXGFwcFxccGFnZXNcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFkSjtJQWVRLGFBQUE7SUFDQSxjQUFBO0VDR047QUFDRjtBREZJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSVI7QURIUTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHdEQUFBO0FDS1o7QURKWTtFQUNJLHNCQUFBO0FDTWhCO0FERGdCO0VBQ0ksd0VBQUE7QUNHcEI7QURKZ0I7RUFDSSx3RUFBQTtBQ01wQjtBRFBnQjtFQUNJLHdFQUFBO0FDU3BCO0FEVmdCO0VBQ0ksd0VBQUE7QUNZcEI7QURiZ0I7RUFDSSx3RUFBQTtBQ2VwQjtBRGhCZ0I7RUFDSSx3RUFBQTtBQ2tCcEI7QURuQmdCO0VBQ0ksd0VBQUE7QUNxQnBCO0FEdEJnQjtFQUNJLHdFQUFBO0FDd0JwQjtBRHpCZ0I7RUFDSSx3RUFBQTtBQzJCcEI7QUQ1QmdCO0VBQ0kseUVBQUE7QUM4QnBCO0FEL0JnQjtFQUNJLHlFQUFBO0FDaUNwQjtBRGxDZ0I7RUFDSSx5RUFBQTtBQ29DcEI7QURyQ2dCO0VBQ0kseUVBQUE7QUN1Q3BCO0FEeENnQjtFQUNJLHlFQUFBO0FDMENwQjtBRDNDZ0I7RUFDSSx5RUFBQTtBQzZDcEI7QUQ5Q2dCO0VBQ0kseUVBQUE7QUNnRHBCO0FEakRnQjtFQUNJLHlFQUFBO0FDbURwQjtBRHBEZ0I7RUFDSSx5RUFBQTtBQ3NEcEI7QUR2RGdCO0VBQ0kseUVBQUE7QUN5RHBCO0FEMURnQjtFQUNJLHlFQUFBO0FDNERwQjtBRDdEZ0I7RUFDSSx5RUFBQTtBQytEcEI7QURoRWdCO0VBQ0kseUVBQUE7QUNrRXBCO0FEbkVnQjtFQUNJLHlFQUFBO0FDcUVwQjtBRHRFZ0I7RUFDSSx5RUFBQTtBQ3dFcEI7QUR6RWdCO0VBQ0kseUVBQUE7QUMyRXBCO0FENUVnQjtFQUNJLHlFQUFBO0FDOEVwQjtBRC9FZ0I7RUFDSSx5RUFBQTtBQ2lGcEI7QURsRmdCO0VBQ0kseUVBQUE7QUNvRnBCO0FEckZnQjtFQUNJLHlFQUFBO0FDdUZwQjtBRHhGZ0I7RUFDSSx5RUFBQTtBQzBGcEI7QUR0RlE7RUFDSSxhQUFBO0FDd0ZaO0FEdEZRO0VBQ0kscUJBQUE7QUN3RloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImdyaWQge1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDMwMDBweDtcclxuICAgIGhlaWdodDogMjAwMHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcclxuICAgIGN1cnNvcjogZHJhZztcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAxNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDAwcHg7XHJcbiAgICB9XHJcbiAgICAuYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgZmxleDogMSAxIDIwJTtcclxuICAgICAgICBjb3VudGVyLWluY3JlbWVudDogYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIGN1YmljLWJlemllcigwLjQyLCAwLCAwLjEsIDEpO1xyXG4gICAgICAgICAgICAuZHJhZ2dpbmcgJiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMzAge1xyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzEjeyRpfS84MDB4ODAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCgzbiArIDIpIHtcclxuICAgICAgICAgICAgZmxleDogMSAxIDEwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBjb3VudGVyKGJveCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZ3JpZCB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAzMDAwcHg7XG4gIGhlaWdodDogMjAwMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xuICBjdXJzb3I6IGRyYWc7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgZ3JpZCB7XG4gICAgd2lkdGg6IDE0MDBweDtcbiAgICBoZWlnaHQ6IDE0MDBweDtcbiAgfVxufVxuZ3JpZCAuYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDEwcHg7XG4gIGZsZXg6IDEgMSAyMCU7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmdyaWQgLmJveDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgei1pbmRleDogMjtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC4xLCAxKTtcbn1cbi5kcmFnZ2luZyBncmlkIC5ib3g6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxKTphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi8xMS84MDB4ODAwKTtcbn1cbmdyaWQgLmJveDpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTIvODAweDgwMCk7XG59XG5ncmlkIC5ib3g6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzEzLzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCg0KTphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi8xNC84MDB4ODAwKTtcbn1cbmdyaWQgLmJveDpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTUvODAweDgwMCk7XG59XG5ncmlkIC5ib3g6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzE2LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCg3KTphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi8xNy84MDB4ODAwKTtcbn1cbmdyaWQgLmJveDpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTgvODAweDgwMCk7XG59XG5ncmlkIC5ib3g6bnRoLWNoaWxkKDkpOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzE5LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxMCk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTEwLzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxMSk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTExLzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxMik6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTEyLzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxMyk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTEzLzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxNCk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTE0LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxNSk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTE1LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxNik6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTE2LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxNyk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTE3LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxOCk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTE4LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgxOSk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTE5LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgyMCk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTIwLzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgyMSk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTIxLzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgyMik6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTIyLzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgyMyk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTIzLzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgyNCk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTI0LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgyNSk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTI1LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgyNik6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTI2LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgyNyk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTI3LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgyOCk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTI4LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgyOSk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTI5LzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgzMCk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTMwLzgwMHg4MDApO1xufVxuZ3JpZCAuYm94Om50aC1jaGlsZCgzbisyKSB7XG4gIGZsZXg6IDEgMSAxMCU7XG59XG5ncmlkIC5ib3g6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihib3gpO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/pages/services/iot/iot.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/pages/services/iot/iot.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_ServicesIotComponent, View_ServicesIotComponent_0, View_ServicesIotComponent_Host_0, ServicesIotComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ServicesIotComponent", function() { return RenderType_ServicesIotComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ServicesIotComponent_0", function() { return View_ServicesIotComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ServicesIotComponent_Host_0", function() { return View_ServicesIotComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesIotComponentNgFactory", function() { return ServicesIotComponentNgFactory; });
/* harmony import */ var _iot_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iot.component.scss.shim.ngstyle */ "./src/app/pages/services/iot/iot.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iot.component */ "./src/app/pages/services/iot/iot.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ServicesIotComponent = [_iot_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ServicesIotComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ServicesIotComponent, data: {} });

function View_ServicesIotComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 63, "div", [["class", "container page-margin-top bg-image-shape"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 62, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h1", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Internet Of Things"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["class", "col-12 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["src", "../../../assets/images/service-iot.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 9, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Smart Home & Offices"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Smart Garden & Parking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Realtime Tracking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Indoor & Outdoor Tracking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 44, "div", [["class", "col-12 align-self-center p-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 11, "article", [["class", "service-article"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "span", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Smart Home & Offices"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 7, "article", [["class", "service-article"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "span", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Smart Garden & Parking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 15, "article", [["class", "service-article"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "span", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Realtime Tracking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 7, "article", [["class", "service-article"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "span", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Indoor & Outdoor Tracking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit Eveniet esse alias ipsam laborum similique, fuga nam! "]))], null, null); }
function View_ServicesIotComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-services-iot", [], null, null, null, View_ServicesIotComponent_0, RenderType_ServicesIotComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _iot_component__WEBPACK_IMPORTED_MODULE_2__["ServicesIotComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ServicesIotComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-services-iot", _iot_component__WEBPACK_IMPORTED_MODULE_2__["ServicesIotComponent"], View_ServicesIotComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/services/iot/iot.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/pages/services/iot/iot.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".service-article[_ngcontent-%COMP%] {\n  margin: 1rem 0 4rem 0;\n}\n.service-article[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZXMvaW90L0Q6XFxQcm9qZWN0c1xcd3d3LW5vZGVcXHdlYnNpdGUvc3JjXFxhcHBcXHBhZ2VzXFxzZXJ2aWNlc1xcaW90XFxpb3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL2lvdC9pb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZXMvaW90L2lvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlLWFydGljbGUge1xyXG4gICAgbWFyZ2luOiAxcmVtIDAgNHJlbSAwO1xyXG4gICAgKiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxufSIsIi5zZXJ2aWNlLWFydGljbGUge1xuICBtYXJnaW46IDFyZW0gMCA0cmVtIDA7XG59XG4uc2VydmljZS1hcnRpY2xlICoge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/services/iot/iot.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/services/iot/iot.component.ts ***!
  \*****************************************************/
/*! exports provided: ServicesIotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesIotComponent", function() { return ServicesIotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ServicesIotComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/pages/services/robotics/robotics.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/pages/services/robotics/robotics.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_ServicesRoboticsComponent, View_ServicesRoboticsComponent_0, View_ServicesRoboticsComponent_Host_0, ServicesRoboticsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ServicesRoboticsComponent", function() { return RenderType_ServicesRoboticsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ServicesRoboticsComponent_0", function() { return View_ServicesRoboticsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ServicesRoboticsComponent_Host_0", function() { return View_ServicesRoboticsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoboticsComponentNgFactory", function() { return ServicesRoboticsComponentNgFactory; });
/* harmony import */ var _robotics_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./robotics.component.scss.shim.ngstyle */ "./src/app/pages/services/robotics/robotics.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _robotics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robotics.component */ "./src/app/pages/services/robotics/robotics.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ServicesRoboticsComponent = [_robotics_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ServicesRoboticsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ServicesRoboticsComponent, data: {} });

function View_ServicesRoboticsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 53, "div", [["class", "container page-margin-top bg-image-shape"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 52, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h1", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Robotics"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["class", "col-12 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["src", "../../../assets/images/service-robotics.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Drone Design & Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DOF Robots Design & Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customized Robots Design"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 36, "div", [["class", "col-12 align-self-center p-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 11, "article", [["class", "service-article"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "span", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Drone Design & Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 7, "article", [["class", "service-article"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "span", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DOF Robots Design & Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 15, "article", [["class", "service-article"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "span", [["class", "read-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customized Robots Design"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint illo voluptatem sed numquam! Dolorum reiciendis sint repellendus velit, autem saepe facilis. Eveniet esse alias ipsam laborum similique, fuga nam! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit Eveniet esse alias ipsam laborum similique, fuga nam! "]))], null, null); }
function View_ServicesRoboticsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-services-robotics", [], null, null, null, View_ServicesRoboticsComponent_0, RenderType_ServicesRoboticsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _robotics_component__WEBPACK_IMPORTED_MODULE_2__["ServicesRoboticsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ServicesRoboticsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-services-robotics", _robotics_component__WEBPACK_IMPORTED_MODULE_2__["ServicesRoboticsComponent"], View_ServicesRoboticsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/services/robotics/robotics.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/services/robotics/robotics.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".service-article[_ngcontent-%COMP%] {\n  margin: 1rem 0 4rem 0;\n}\n.service-article[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZXMvcm9ib3RpY3MvRDpcXFByb2plY3RzXFx3d3ctbm9kZVxcd2Vic2l0ZS9zcmNcXGFwcFxccGFnZXNcXHNlcnZpY2VzXFxyb2JvdGljc1xccm9ib3RpY3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3JvYm90aWNzL3JvYm90aWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREFJO0VBQ0ksbUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3JvYm90aWNzL3JvYm90aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2UtYXJ0aWNsZSB7XHJcbiAgICBtYXJnaW46IDFyZW0gMCA0cmVtIDA7XHJcbiAgICAqIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG59IiwiLnNlcnZpY2UtYXJ0aWNsZSB7XG4gIG1hcmdpbjogMXJlbSAwIDRyZW0gMDtcbn1cbi5zZXJ2aWNlLWFydGljbGUgKiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59Il19 */"];



/***/ }),

/***/ "./src/app/pages/services/robotics/robotics.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/services/robotics/robotics.component.ts ***!
  \***************************************************************/
/*! exports provided: ServicesRoboticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoboticsComponent", function() { return ServicesRoboticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ServicesRoboticsComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/pages/services/services.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/pages/services/services.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_ServicesComponent, View_ServicesComponent_0, View_ServicesComponent_Host_0, ServicesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ServicesComponent", function() { return RenderType_ServicesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ServicesComponent_0", function() { return View_ServicesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ServicesComponent_Host_0", function() { return View_ServicesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponentNgFactory", function() { return ServicesComponentNgFactory; });
/* harmony import */ var _services_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.component.scss.shim.ngstyle */ "./src/app/pages/services/services.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services.component */ "./src/app/pages/services/services.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ServicesComponent = [_services_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ServicesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ServicesComponent, data: {} });

function View_ServicesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 108, "div", [["class", "container page-margin-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 107, "section", [["class", "section section-services bg-image-shape"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 106, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "section-title-ghost"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Our Services"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "p", [["class", "section-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Our Services"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 23, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "div", [["class", "col-12 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "img", [["src", "../../../assets/images/service-iot.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 18, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Internet of Things"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 8, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Smart Home & Offices"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Smart Garden & Parking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Realtime Tracking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Indoor & Outdoor Tracking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 6, "a", [["class", "read-more"], ["routerLinkActive", "router-link-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](27, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Read More"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 14, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "div", [["class", "col-12 col-md-6 order-lg-last"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "img", [["src", "../../../assets/images/service-ai.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 9, "div", [["class", "col-12 col-md-6 align-self-center text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Artificial Intelligence"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 6, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Machine Learning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Deep Learning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Face Recognition"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 14, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 3, "div", [["class", "col-12 col-md-6 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 0, "img", [["src", "../../../assets/images/service-robotics.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 9, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Robotics"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 6, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Drone Design & Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DOF Robots Design & Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customized Robots Design"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 14, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 3, "div", [["class", "col-12 col-md-6 order-lg-last"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 0, "img", [["src", "../../../assets/images/service-voice.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 9, "div", [["class", "col-12 col-md-6 align-self-center text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Voice Integration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 6, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amazon Alexa"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Google Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Apple Siri"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 14, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 3, "div", [["class", "col-12 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 0, "img", [["src", "../../../assets/images/service-api.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 9, "div", [["class", "col-12 col-md-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["API Development & Integration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 6, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Graph QL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Rest API"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Microservices"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 16, "div", [["class", "row services-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 3, "div", [["class", "col-12 col-md-6 order-lg-last"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 2, "div", [["class", "card card-round mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 0, "img", [["src", "../../../assets/images/service-web.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 11, "div", [["class", "col-12 col-md-6 align-self-center text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 1, "h3", [["class", "service-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mobile/Web Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 8, "ul", [["class", "service-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Native Android & iOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["React Native, Flutter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Angular, React, Vue"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Laravel, Zend, Codeigniter"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 27, 0, "/services/iot"); _ck(_v, 26, 0, currVal_2); var currVal_3 = "router-link-active"; _ck(_v, 28, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).href; _ck(_v, 25, 0, currVal_0, currVal_1); }); }
function View_ServicesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-services", [], null, null, null, View_ServicesComponent_0, RenderType_ServicesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ServicesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-services", _services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"], View_ServicesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/services/services.component.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/pages/services/services.component.scss.shim.ngstyle.js ***!
  \************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".service-article[_ngcontent-%COMP%] {\n  margin: 1rem 0 4rem 0;\n}\n.service-article[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZXMvRDpcXFByb2plY3RzXFx3d3ctbm9kZVxcd2Vic2l0ZS9zcmNcXGFwcFxccGFnZXNcXHNlcnZpY2VzXFxzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZS1hcnRpY2xlIHtcclxuICAgIG1hcmdpbjogMXJlbSAwIDRyZW0gMDtcclxuICAgICoge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbn0iLCIuc2VydmljZS1hcnRpY2xlIHtcbiAgbWFyZ2luOiAxcmVtIDAgNHJlbSAwO1xufVxuLnNlcnZpY2UtYXJ0aWNsZSAqIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/pages/team/team.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/pages/team/team.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_TeamComponent, View_TeamComponent_0, View_TeamComponent_Host_0, TeamComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TeamComponent", function() { return RenderType_TeamComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TeamComponent_0", function() { return View_TeamComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TeamComponent_Host_0", function() { return View_TeamComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponentNgFactory", function() { return TeamComponentNgFactory; });
/* harmony import */ var _team_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team.component.scss.shim.ngstyle */ "./src/app/pages/team/team.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team.component */ "./src/app/pages/team/team.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_TeamComponent = [_team_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TeamComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TeamComponent, data: {} });

function View_TeamComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["team works!"]))], null, null); }
function View_TeamComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-team", [], null, null, null, View_TeamComponent_0, RenderType_TeamComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _team_component__WEBPACK_IMPORTED_MODULE_2__["TeamComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TeamComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-team", _team_component__WEBPACK_IMPORTED_MODULE_2__["TeamComponent"], View_TeamComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/team/team.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/pages/team/team.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/pages/team/team.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/team/team.component.ts ***!
  \**********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/partials/footer/footer.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_FooterComponent, View_FooterComponent_0, View_FooterComponent_Host_0, FooterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FooterComponent", function() { return RenderType_FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_0", function() { return View_FooterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_Host_0", function() { return View_FooterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentNgFactory", function() { return FooterComponentNgFactory; });
/* harmony import */ var _footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.scss.shim.ngstyle */ "./src/app/partials/footer/footer.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/partials/footer/footer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_FooterComponent = [_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 61, "div", [["class", "footer bg-image-shape-flip"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 58, "div", [["class", " container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 57, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 27, "div", [["class", "col-12 col-md"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h3", [["class", "section-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["We have"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 24, "ul", [["class", "section-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "a", [["routerLinkActive", "router-link-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](10, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 6, "a", [["routerLinkActive", "router-link-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](18, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Services"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 6, "a", [["routerLinkActive", "router-link-active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](26, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Projects"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 15, "div", [["class", "col-12 col-md"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "h3", [["class", "section-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Join us"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 12, "ul", [["class", "section-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-map-marker fa-1x mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ahmedabad, India"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-envelope-o fa-1x mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["captiosustech@gmail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-phone-alt fa-1x mr-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+91 886 619 6499, +64 210 223 1538"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 12, "div", [["class", "col-12 col-md"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "h3", [["class", "section-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Find us here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 9, "ul", [["class", "section-topics mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 8, "div", [["class", "footer-social"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "a", [["href", "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=captiosustech.biz@gmail.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 0, "i", [["class", "fab fa-google"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "a", [["href", "skype:viroja.parth.manshukhbhai?chat"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 0, "i", [["class", "fab fa-skype"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "a", [["href", "https://wa.me/918866196499"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 0, "i", [["class", "fab fa-whatsapp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "a", [["href", "https://github.com/captiosustech"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 0, "i", [["class", "fab fa-github"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "p", [["class", "copyright text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copyright \u00A9 All Rights Reserved By Captiosus Technolabs"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 10, 0, "/"); _ck(_v, 9, 0, currVal_2); var currVal_3 = "router-link-active"; _ck(_v, 11, 0, currVal_3); var currVal_6 = _ck(_v, 18, 0, "/services"); _ck(_v, 17, 0, currVal_6); var currVal_7 = "router-link-active"; _ck(_v, 19, 0, currVal_7); var currVal_10 = _ck(_v, 26, 0, "/projects"); _ck(_v, 25, 0, currVal_10); var currVal_11 = "router-link-active"; _ck(_v, 27, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).href; _ck(_v, 8, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).href; _ck(_v, 16, 0, currVal_4, currVal_5); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).target; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).href; _ck(_v, 24, 0, currVal_8, currVal_9); }); }
function View_FooterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], View_FooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/partials/footer/footer.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/partials/footer/footer.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".footer[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem;\n  color: #aaa;\n  letter-spacing: 0.2rem;\n  margin: 0;\n}\n.footer[_ngcontent-%COMP%]   .section-name[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.footer[_ngcontent-%COMP%]   .section-topics[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n.footer-social[_ngcontent-%COMP%] {\n  right: 0;\n  width: 100%;\n  bottom: 1rem;\n  display: flex;\n  flex-direction: row;\n  text-align: right;\n}\n.footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 1rem;\n  color: #dfdfdf;\n}\n.footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fbdb5c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL0Q6XFxQcm9qZWN0c1xcd3d3LW5vZGVcXHdlYnNpdGUvc3JjXFxhcHBcXHBhcnRpYWxzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLGdCQUFBO0FDRko7QURHSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNEUjtBREdJO0VBQ0ksbUJBQUE7QUNEUjtBREdJO0VBQ0ksbUJBQUE7QUNEUjtBREdJO0VBQ0ksUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREVRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQVo7QURDWTtFQUNJLGVBQUE7QUNDaEI7QURDWTtFQUNJLGNBQUE7QUNDaEIiLCJmaWxlIjoic3JjL2FwcC9wYXJ0aWFscy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9vdGVyLWJnLnN2ZycpIGJvdHRvbSBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDMzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwXHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1uYW1lIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tdG9waWNzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgJi1zb2NpYWwge1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvdHRvbTogMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNkZmRmZGY7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmYmRiNWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbn1cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMnJlbTtcbiAgY29sb3I6ICNhYWE7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gIG1hcmdpbjogMDtcbn1cbi5mb290ZXIgLnNlY3Rpb24tbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uZm9vdGVyIC5zZWN0aW9uLXRvcGljcyB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG4uZm9vdGVyLXNvY2lhbCB7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb290ZXItc29jaWFsIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGNvbG9yOiAjZGZkZmRmO1xufVxuLmZvb3Rlci1zb2NpYWwgYSBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLmZvb3Rlci1zb2NpYWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmJkYjVjO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/partials/header/header.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/partials/header/header.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.scss.shim.ngstyle */ "./src/app/partials/header/header.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/sidebar.service */ "./src/app/shared/services/sidebar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "wrapper-brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["height", "60"], ["src", "../../../assets/images/logo.svg"]], null, null, null, null, null))], null, null); }
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], [_shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/partials/header/header.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/partials/header/header.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".app-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  padding: 1rem;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvaGVhZGVyL0Q6XFxQcm9qZWN0c1xcd3d3LW5vZGVcXHdlYnNpdGUvc3JjXFxhcHBcXHBhcnRpYWxzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFydGlhbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCIuYXBwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class HeaderComponent {
    constructor(sidebar) {
        this.sidebar = sidebar;
    }
    ngOnInit() {
    }
    onToggleSidebar() {
        if (this.sidebar.isOpen) {
            this.sidebar.hide();
        }
        else {
            this.sidebar.show();
        }
    }
}


/***/ }),

/***/ "./src/app/partials/sidebar/sidebar.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/partials/sidebar/sidebar.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_SidebarComponent, View_SidebarComponent_0, View_SidebarComponent_Host_0, SidebarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SidebarComponent", function() { return RenderType_SidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SidebarComponent_0", function() { return View_SidebarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SidebarComponent_Host_0", function() { return View_SidebarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponentNgFactory", function() { return SidebarComponentNgFactory; });
/* harmony import */ var _sidebar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component.scss.shim.ngstyle */ "./src/app/partials/sidebar/sidebar.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_ngx_scrollbar_ngx_scrollbar_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ngx-scrollbar/ngx-scrollbar.ngfactory */ "./node_modules/ngx-scrollbar/ngx-scrollbar.ngfactory.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/partials/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/sidebar.service */ "./src/app/shared/services/sidebar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_SidebarComponent = [_sidebar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SidebarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SidebarComponent, data: {} });

function View_SidebarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 55, "div", [["class", "app-sidebar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 54, "div", [["class", "sidebar-layers open"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { open: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 11, "div", [["class", "sidebar-layer sidebar-layer-one"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "sidebar-toggle"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onToggleSidebar() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-bars"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 8, "div", [["class", "sidebar-social"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "a", [["href", "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=captiosustech.biz@gmail.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fab fa-google"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "a", [["href", "skype:viroja.parth.manshukhbhai?chat"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "i", [["class", "fab fa-skype"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "a", [["href", "https://wa.me/918866196499"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fab fa-whatsapp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "a", [["href", "https://github.com/captiosustech"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "i", [["class", "fab fa-github"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 38, "div", [["class", "sidebar-layer sidebar-layer-two"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 37, "ng-scrollbar", [], [[1, "customView", 0], [1, "trackX", 0], [1, "trackY", 0], [1, "compact", 0], [1, "autoHide", 0]], null, null, _node_modules_ngx_scrollbar_ngx_scrollbar_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NgScrollbar_0"], _node_modules_ngx_scrollbar_ngx_scrollbar_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NgScrollbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4374528, null, 1, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__["NgScrollbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { trackX: [0, "trackX"], disableOnBreakpoints: [1, "disableOnBreakpoints"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { customViewPort: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 34, "ul", [["class", "sidebar-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 11, "li", [["class", "menu-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 10, "a", [["class", "menu-link"], ["href", "#"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, [[3, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](25, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](29, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](30, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Home "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "span", [["class", "menu-sublink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lorem sit amet consectetur"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 10, "li", [["class", "menu-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 9, "a", [["class", "menu-link"], ["href", "#"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 671744, [[5, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](37, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](41, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Services "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "span", [["class", "menu-sublink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lorem sit amet consectetur"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 10, "li", [["class", "menu-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 9, "a", [["class", "menu-link"], ["href", "#"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 671744, [[7, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](48, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](52, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Projects "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "span", [["class", "menu-sublink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lorem sit amet consectetur"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "sidebar-layers open"; var currVal_1 = _ck(_v, 4, 0, _co.sidebar.isOpen); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_7 = false; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵEMPTY_ARRAY"]; _ck(_v, 19, 0, currVal_7, currVal_8); var currVal_11 = _ck(_v, 25, 0, "/"); _ck(_v, 24, 0, currVal_11); var currVal_12 = _ck(_v, 29, 0, true); var currVal_13 = _ck(_v, 30, 0, "active"); _ck(_v, 26, 0, currVal_12, currVal_13); var currVal_16 = _ck(_v, 37, 0, "/services"); _ck(_v, 36, 0, currVal_16); var currVal_17 = _ck(_v, 41, 0, "active"); _ck(_v, 38, 0, currVal_17); var currVal_20 = _ck(_v, 48, 0, "/projects"); _ck(_v, 47, 0, currVal_20); var currVal_21 = _ck(_v, 52, 0, "active"); _ck(_v, 49, 0, currVal_21); }, function (_ck, _v) { var currVal_2 = !!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).customViewPort; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).trackX; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).trackY; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).compact; var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).shown === "hover"); _ck(_v, 18, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).href; _ck(_v, 23, 0, currVal_9, currVal_10); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).target; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).href; _ck(_v, 35, 0, currVal_14, currVal_15); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).target; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).href; _ck(_v, 46, 0, currVal_18, currVal_19); }); }
function View_SidebarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-sidebar", [], null, null, null, View_SidebarComponent_0, RenderType_SidebarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], [_shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_8__["SidebarService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SidebarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-sidebar", _sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], View_SidebarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/partials/sidebar/sidebar.component.scss.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/partials/sidebar/sidebar.component.scss.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".app-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  align-items: center;\n  z-index: 1000;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-layer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0;\n  transition: all 1s;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-layer-one[_ngcontent-%COMP%] {\n  width: auto;\n  z-index: 3;\n  right: 0;\n  padding: 2rem;\n  text-align: center;\n  align-items: center;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-layer-two[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 410px;\n  right: -500px;\n  transition: all 0.5s;\n  z-index: 2;\n  padding: 4rem;\n  padding-right: 5rem;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-layer-two[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \" \";\n  display: block;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.95;\n  background-color: #fff;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-social[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 100%;\n  bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 1rem;\n  color: #dfdfdf;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fbdb5c;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1.5rem;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%] {\n  position: relative;\n  color: #000;\n  margin-bottom: 0.25rem;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \" \";\n  bottom: -0.1rem;\n  left: 0;\n  right: 0;\n  height: 1rem;\n  background-color: #dfdfdf;\n  z-index: -2;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \" \";\n  bottom: -0.1rem;\n  left: 0;\n  width: 0px;\n  height: 1rem;\n  background-color: #fbdb5c;\n  z-index: -1;\n  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n\n.sidebar-layers[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .menu-sublink[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n}\n\n.sidebar-layers.open[_ngcontent-%COMP%]   .sidebar-layer[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.sidebar-layers.open[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  color: #fbdb5c;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: #aaa;\n  margin-bottom: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  margin-bottom: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .sidebar-layers.open[_ngcontent-%COMP%]   .sidebar-layer[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .sidebar-layers[_ngcontent-%COMP%]   .sidebar-layer[_ngcontent-%COMP%]   .sidebar-social[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvc2lkZWJhci9EOlxcUHJvamVjdHNcXHd3dy1ub2RlXFx3ZWJzaXRlL3NyY1xcYXBwXFxwYXJ0aWFsc1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFydGlhbHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0RKOztBREtJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNGUjs7QURHUTtFQUVJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRlo7O0FETVE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdUNBQUE7QUNMWjs7QURNWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0poQjs7QURrQkk7RUFDSSxlQUFBO0FDaEJSOztBRGlCUTtFQUNJLGVBQUE7QUNmWjs7QURrQkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDaEJSOztBRGlCUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ2ZaOztBRGdCWTtFQUNJLGVBQUE7QUNkaEI7O0FEZ0JZO0VBQ0ksY0FBQTtBQ2RoQjs7QURtQlE7RUFDSSxnQkFBQTtBQ2pCWjs7QURrQlk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUNoQmhCOztBRGtCWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDaEJoQjs7QURpQmdCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ2ZwQjs7QURpQmdCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQXBIWjtFQXFIWSxXQUFBO0VBQ0Esd0RBQUE7QUNmcEI7O0FEaUJnQjtFQUNJLFdBQUE7QUNmcEI7O0FEa0JZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDaEJoQjs7QURxQlE7RUFDSSxRQUFBO0FDbkJaOztBRHFCUTtFQUNJLGNBQUE7QUNuQlo7O0FEd0JBO0VBQ0ksc0JBQUE7QUNyQko7O0FEd0JBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FDckJKOztBRHdCQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUNyQko7O0FEd0JBO0VBR1k7SUFDSSxRQUFBO0VDdkJkO0VEMkJVO0lBQ0ksYUFBQTtFQ3pCZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpcnN0OiAjZmJkYjVjO1xyXG4kbGFzdDogIzg2ZDhmZjtcclxuLmFwcC1zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxheWVycyB7XHJcbiAgICAuc2lkZWJhci1sYXllciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgJi1vbmUge1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLy9ib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10d28ge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0MTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC01MDBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgIC8vYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGZkZmRmO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk1O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAmLXRocmVlIHtcclxuICAgICAgICAvLyAgICAgd2lkdGg6IDUyJTtcclxuICAgICAgICAvLyAgICAgcmlnaHQ6IC01MyU7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLy8gICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmctcmlnaHQ6IDMwJTtcclxuICAgICAgICAvLyAgICAgLy9ib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZmRmZGY7XHJcbiAgICAgICAgLy8gICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci10b2dnbGUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaWRlYmFyLXNvY2lhbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvdHRvbTogMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZGZkZmRmO1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJkYjVjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNpZGViYXItbWVudSB7XHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGluayB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtc3VibGluayB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYub3BlbiB7XHJcbiAgICAgICAgLnNpZGViYXItbGF5ZXIge1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpZGViYXItdG9nZ2xlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmYmRiNWM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zaWRlYmFyLWxheWVycyB7XHJcbiAgICAgICAgJi5vcGVuIHtcclxuICAgICAgICAgICAgLnNpZGViYXItbGF5ZXIge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpZGViYXItbGF5ZXIge1xyXG4gICAgICAgICAgICAuc2lkZWJhci1zb2NpYWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5hcHAtc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uc2lkZWJhci1sYXllcnMgLnNpZGViYXItbGF5ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDA7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cbi5zaWRlYmFyLWxheWVycyAuc2lkZWJhci1sYXllci1vbmUge1xuICB3aWR0aDogYXV0bztcbiAgei1pbmRleDogMztcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaWRlYmFyLWxheWVycyAuc2lkZWJhci1sYXllci10d28ge1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiA0MTBweDtcbiAgcmlnaHQ6IC01MDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDRyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5zaWRlYmFyLWxheWVycyAuc2lkZWJhci1sYXllci10d286OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uc2lkZWJhci1sYXllcnMgLnNpZGViYXItdG9nZ2xlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZGViYXItbGF5ZXJzIC5zaWRlYmFyLXRvZ2dsZSBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLnNpZGViYXItbGF5ZXJzIC5zaWRlYmFyLXNvY2lhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWRlYmFyLWxheWVycyAuc2lkZWJhci1zb2NpYWwgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICNkZmRmZGY7XG59XG4uc2lkZWJhci1sYXllcnMgLnNpZGViYXItc29jaWFsIGEgaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5zaWRlYmFyLWxheWVycyAuc2lkZWJhci1zb2NpYWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmJkYjVjO1xufVxuLnNpZGViYXItbGF5ZXJzIC5zaWRlYmFyLW1lbnUgLm1lbnUge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLnNpZGViYXItbGF5ZXJzIC5zaWRlYmFyLW1lbnUgLm1lbnUtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLnNpZGViYXItbGF5ZXJzIC5zaWRlYmFyLW1lbnUgLm1lbnUtbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG4uc2lkZWJhci1sYXllcnMgLnNpZGViYXItbWVudSAubWVudS1saW5rOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBib3R0b206IC0wLjFyZW07XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XG4gIHotaW5kZXg6IC0yO1xufVxuLnNpZGViYXItbGF5ZXJzIC5zaWRlYmFyLW1lbnUgLm1lbnUtbGluazo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBib3R0b206IC0wLjFyZW07XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZGI1YztcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xufVxuLnNpZGViYXItbGF5ZXJzIC5zaWRlYmFyLW1lbnUgLm1lbnUtbGluazpob3Zlcjo6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zaWRlYmFyLWxheWVycyAuc2lkZWJhci1tZW51IC5tZW51LXN1Ymxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuLnNpZGViYXItbGF5ZXJzLm9wZW4gLnNpZGViYXItbGF5ZXIge1xuICByaWdodDogMDtcbn1cbi5zaWRlYmFyLWxheWVycy5vcGVuIC5zaWRlYmFyLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmJkYjVjO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uc3VidGl0bGUge1xuICBjb2xvcjogI2FhYTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uY29udGVudCB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmFyLWxheWVycy5vcGVuIC5zaWRlYmFyLWxheWVyIHtcbiAgICByaWdodDogMDtcbiAgfVxuICAuc2lkZWJhci1sYXllcnMgLnNpZGViYXItbGF5ZXIgLnNpZGViYXItc29jaWFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/partials/sidebar/sidebar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/partials/sidebar/sidebar.component.ts ***!
  \*******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class SidebarComponent {
    constructor(sidebar) {
        this.sidebar = sidebar;
    }
    ngOnInit() {
    }
    onToggleSidebar() {
        if (this.sidebar.isOpen) {
            this.sidebar.hide();
        }
        else {
            this.sidebar.show();
        }
    }
}


/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_LoaderComponent, View_LoaderComponent_0, View_LoaderComponent_Host_0, LoaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoaderComponent", function() { return RenderType_LoaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoaderComponent_0", function() { return View_LoaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoaderComponent_Host_0", function() { return View_LoaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponentNgFactory", function() { return LoaderComponentNgFactory; });
/* harmony import */ var _loader_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.component.scss.shim.ngstyle */ "./src/app/shared/components/loader/loader.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/app/shared/services/loader.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_LoaderComponent = [_loader_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoaderComponent, data: {} });

function View_LoaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "app-loader"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "loader"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "div", [["class", "box"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.loading; _ck(_v, 0, 0, currVal_0); }); }
function View_LoaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loader", [], null, null, null, View_LoaderComponent_0, RenderType_LoaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], [_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-loader", _loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], View_LoaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".app-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  z-index: 1000;\n}\n.app-loader[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: wrap;\n  width: 90px;\n  height: 90px;\n  transform-style: preserve-3d;\n  transform: rotateX(45deg) rotate(45deg);\n}\n.app-loader[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  background: #FED750;\n  -webkit-animation: move 2s ease-in-out infinite both;\n          animation: move 2s ease-in-out infinite both;\n  transform-style: preserve-3d;\n}\n.app-loader[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n.app-loader[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: -2s;\n          animation-delay: -2s;\n}\n.app-loader[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: -3s;\n          animation-delay: -3s;\n}\n.app-loader[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:before, .app-loader[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 30px;\n  height: 30px;\n}\n.app-loader[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:before {\n  top: 100%;\n  left: 0;\n  background: #E6A32F;\n  transform-origin: center top;\n  transform: rotateX(-90deg);\n}\n.app-loader[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:after {\n  top: 0;\n  left: 100%;\n  background: #C87932;\n  transform-origin: center left;\n  transform: rotateY(90deg);\n}\n@-webkit-keyframes move {\n  0%, 100% {\n    transform: none;\n  }\n  12.5% {\n    transform: translate(30px, 0);\n  }\n  25% {\n    transform: translate(60px, 0);\n  }\n  37.5% {\n    transform: translate(60px, 30px);\n  }\n  50% {\n    transform: translate(60px, 60px);\n  }\n  62.5% {\n    transform: translate(30px, 60px);\n  }\n  75% {\n    transform: translate(0, 60px);\n  }\n  87.5% {\n    transform: translate(0, 30px);\n  }\n}\n@keyframes move {\n  0%, 100% {\n    transform: none;\n  }\n  12.5% {\n    transform: translate(30px, 0);\n  }\n  25% {\n    transform: translate(60px, 0);\n  }\n  37.5% {\n    transform: translate(60px, 30px);\n  }\n  50% {\n    transform: translate(60px, 60px);\n  }\n  62.5% {\n    transform: translate(30px, 60px);\n  }\n  75% {\n    transform: translate(0, 60px);\n  }\n  87.5% {\n    transform: translate(0, 30px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL0Q6XFxQcm9qZWN0c1xcd3d3LW5vZGVcXHdlYnNpdGUvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNWSjtBRFlJO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHVDQUFBO0FDVlI7QURhTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQWpDQTtFQWtDQSxZQWxDQTtFQW1DQSxtQkFsQ1E7RUFvQ1Isb0RBQUE7VUFBQSw0Q0FBQTtFQUNBLDRCQUFBO0FDWlI7QURlVTtFQUNFLDRCQUFBO1VBQUEsb0JBQUE7QUNiWjtBRFlVO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ1ZaO0FEU1U7RUFDRSw0QkFBQTtVQUFBLG9CQUFBO0FDUFo7QURXUTtFQXZDTixjQUFBO0VBQ0EsV0FBQTtFQXdDUSxrQkFBQTtFQUNBLFdBakRGO0VBa0RFLFlBbERGO0FDMENSO0FEVVE7RUFDRSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQXJEQTtFQXNEQSw0QkFBQTtFQUNBLDBCQUFBO0FDUlY7QURVUTtFQUNFLE1BQUE7RUFDQSxVQUFBO0VBQ0EsbUJBM0RLO0VBNERMLDZCQUFBO0VBQ0EseUJBQUE7QUNSVjtBRGFBO0VBQ0U7SUFBVyxlQUFBO0VDVFg7RURVQTtJQUFRLDZCQUFBO0VDUFI7RURRQTtJQUFNLDZCQUFBO0VDTE47RURNQTtJQUFRLGdDQUFBO0VDSFI7RURJQTtJQUFNLGdDQUFBO0VDRE47RURFQTtJQUFRLGdDQUFBO0VDQ1I7RURBQTtJQUFNLDZCQUFBO0VDR047RURGQTtJQUFRLDZCQUFBO0VDS1I7QUFDRjtBRGRBO0VBQ0U7SUFBVyxlQUFBO0VDVFg7RURVQTtJQUFRLDZCQUFBO0VDUFI7RURRQTtJQUFNLDZCQUFBO0VDTE47RURNQTtJQUFRLGdDQUFBO0VDSFI7RURJQTtJQUFNLGdDQUFBO0VDRE47RURFQTtJQUFRLGdDQUFBO0VDQ1I7RURBQTtJQUFNLDZCQUFBO0VDR047RURGQTtJQUFRLDZCQUFBO0VDS1I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc2l6ZSA6IDMwcHg7XHJcbiR5ZWxsb3dfbGlnaHQgOiAjRkVENzUwO1xyXG4keWVsbG93IDogI0U2QTMyRjtcclxuJHllbGxvd19kYXJrIDogI0M4NzkzMjtcclxuJGR1cmF0aW9uIDogMnM7XHJcblxyXG5AbWl4aW4gcHN1ZWRvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4uYXBwLWxvYWRlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gICAgLmxvYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHdpZHRoOiAkc2l6ZSAqIDM7XHJcbiAgICAgICAgaGVpZ2h0OiAkc2l6ZSAqIDM7XHJcbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNDVkZWcpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogJHNpemU7XHJcbiAgICAgICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkeWVsbG93X2xpZ2h0O1xyXG4gICAgICAgIC8vYm94LXNoYWRvdzogJHNpemUqMy43NSAkc2l6ZSozLjc1IDEwcHggIzAwMDtcclxuICAgICAgICBhbmltYXRpb246IG1vdmUgJGR1cmF0aW9uIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XHJcbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHJcbiAgICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAzIHtcclxuICAgICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogJGkvMiAqIC0kZHVyYXRpb247XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmJlZm9yZSwgJjphZnRlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwc3VlZG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogJHNpemU7XHJcbiAgICAgICAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHllbGxvdztcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHllbGxvd19kYXJrO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmUge1xyXG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBub25lOyB9XHJcbiAgMTIuNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkc2l6ZSwgMCk7IH1cclxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkc2l6ZSoyLCAwKTsgfVxyXG4gIDM3LjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHNpemUqMiwgJHNpemUpOyB9XHJcbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHNpemUqMiwgJHNpemUqMik7IH1cclxuICA2Mi41JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKCRzaXplLCAkc2l6ZSoyKTsgfVxyXG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICRzaXplKjIpOyB9XHJcbiAgODcuNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAkc2l6ZSk7IH1cclxufSIsIi5hcHAtbG9hZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5hcHAtbG9hZGVyIC5sb2FkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoNDVkZWcpIHJvdGF0ZSg0NWRlZyk7XG59XG4uYXBwLWxvYWRlciAuYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNGRUQ3NTA7XG4gIGFuaW1hdGlvbjogbW92ZSAycyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLmFwcC1sb2FkZXIgLmJveDpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0xcztcbn1cbi5hcHAtbG9hZGVyIC5ib3g6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG59XG4uYXBwLWxvYWRlciAuYm94Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTNzO1xufVxuLmFwcC1sb2FkZXIgLmJveDpiZWZvcmUsIC5hcHAtbG9hZGVyIC5ib3g6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmFwcC1sb2FkZXIgLmJveDpiZWZvcmUge1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNFNkEzMkY7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xufVxuLmFwcC1sb2FkZXIgLmJveDphZnRlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0M4NzkzMjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG59XG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgMTIuNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjBweCwgMCk7XG4gIH1cbiAgMzcuNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDYwcHgsIDMwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjBweCwgNjBweCk7XG4gIH1cbiAgNjIuNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDYwcHgpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNjBweCk7XG4gIH1cbiAgODcuNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDMwcHgpO1xuICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.loaderService.isLoading.subscribe((v) => {
            console.log(v);
            this.loading = v;
        });
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/shared/services/loader.Interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/loader.Interceptor.ts ***!
  \*******************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.requests = [];
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }
    intercept(req, next) {
        this.requests.push(req);
        console.log("No of requests--->" + this.requests.length);
        this.loaderService.isLoading.next(true);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(observer => {
            const subscription = next.handle(req)
                .subscribe(event => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                    this.removeRequest(req);
                    observer.next(event);
                }
            }, err => {
                alert('error returned');
                this.removeRequest(req);
                observer.error(err);
            }, () => {
                this.removeRequest(req);
                observer.complete();
            });
            // remove request from queue when cancelled
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}


/***/ }),

/***/ "./src/app/shared/services/loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}
LoaderService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function LoaderService_Factory() { return new LoaderService(); }, token: LoaderService, providedIn: "root" });


/***/ }),

/***/ "./src/app/shared/services/sidebar.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/sidebar.service.ts ***!
  \****************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class SidebarService {
    constructor() {
        this.isOpen = false;
    }
    ngOnInit() {
    }
    show() {
        this.isOpen = true;
    }
    hide() {
        this.isOpen = false;
    }
}
SidebarService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function SidebarService_Factory() { return new SidebarService(); }, token: SidebarService, providedIn: "root" });


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\www-node\website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map