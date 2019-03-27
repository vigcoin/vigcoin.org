(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\"><img class=\"logo\" src=\"/assets/images/logo.png\" /> VIG COIN</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse nav-right\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"\">Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#philosophy\">Philosophy</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#technology\">Technology</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#roadmap\">Road Map</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#wallet\">Wallet</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#mining\">Mining</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#development\">Development</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#contact\">Contact</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"jumbotron\">\n  <!-- <img src=\"/assets/images/background.jpg\"/> -->\n  <div>\n    <div id=\"particles-js\"></div>\n  </div>\n  <div>\n    <h1 class=\"display-4\">Welcome to VIG COIN!</h1>\n    <p class=\"lead\">A fast developing coin for web and real life payment</p>\n    <hr class=\"my-4\">\n    <p>VIG coin is to be a decentralized, secure, privacy, proof-of-request, energy saving, web-friendly cryptocurrency.\n    </p>\n    <a class=\"btn btn-primary btn-lg\" href=\"https://github.com/vigcoin/wiki\" role=\"button\">Learn more</a>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <h1 class=\"border-left\" ><a name=\"philosophy\"></a>Philosophy</h1>\n  <div class=\"row philosophy\">\n    <div class=\"col-sm\">\n      <h2>Decentralized</h2>\n      <img src=\"/assets/images/decentralized.png\" />\n    </div>\n    <div class=\"col-sm\">\n      <h2>Developer Driven</h2>\n      <img src=\"/assets/images/developer.jpg\" />\n\n    </div>\n    <div class=\"col-sm\">\n      <h2>Energy Saving</h2>\n      <img src=\"/assets/images/energy-saving.jpeg\" />\n\n    </div>\n    <div class=\"col-sm\">\n      <h2>Secure & Private</h2>\n      <img src=\"/assets/images/secure-private.png\" />\n\n    </div>\n    <div class=\"col-sm\">\n      <h2>Web & Mobile</h2>\n      <img src=\"/assets/images/webmobile.png\" />\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <h1 class=\"border-left\"><a name=\"technology\"></a>Technology</h1>\n  <div class=\"row philosophy\">\n    <div class=\"col-sm\">\n      <h2>CryptoNote Based</h2>\n      <p>An advanced cryptocurrency protocol, where monero are derived from it. It is untracable, private and securer.\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      <h2>Proof of Requests</h2>\n      <p>VIG is trying to adopt an energy saving consensus, Proof of Requests is where it will start from.</p>\n    </div>\n    <div class=\"col-sm\">\n      <h2>Node as a service</h2>\n      <p>As PoW is energy wasting, PoRs is to redemy in VIG. With PoRs node as a service is enabled fundamentally.</p>\n    </div>\n    <div class=\"col-sm\">\n      <h2>Free Software</h2>\n      <p>As all projects created by vigcoin are default to GPL, which makes them free software. They are created to\n        contribute\n        the software freedom of human beings.</p>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid vigcoin\">\n  <h1>What is VIG COIN?</h1>\n  <p>VIG COIN is a cryptocurrency that want to drive cryptocurrency technology to be used world wide with mobile devices\n    and computers. It is an innovative coin with an open mind to new technologies. It wants everyone to use\n    cryptocurrency easily. It is created for everyone who cares wealth privacy and security.</p>\n</div>\n<!-- <div class=\"container-fluid\">\n  <h1 class=\"border-left\">To Your Business</h1>\n\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h2>A way to store your money.</h2>\n    </div>\n    <div class=\"col-sm\">\n      <h2>A private digital currency.</h2>\n    </div>\n    <div class=\"col-sm\">\n        <h2>A .</h2>\n\n    </div>\n    <div class=\"col-sm\">\n    </div>\n  </div>\n\n</div> -->\n<div class=\"container-fluid\">\n  <h1 class=\"border-left\"><a name=\"roadmap\"></a>Road Map</h1>\n  <div id=\"carouselRoadMap\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselRoadMap\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselRoadMap\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselRoadMap\" data-slide-to=\"2\"></li>\n      <li data-target=\"#carouselRoadMap\" data-slide-to=\"3\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item roadmap-item active\">\n        <img class=\"d-block w-100\" src=\"/assets/images/roadmap/1.jpeg\" />\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>1. Building Coin Basics</h5>\n          <p>Based on CryptoNote, Build a new Coin with everything ready.</p>\n          <h5>Done</h5>\n        </div>\n      </div>\n      <div class=\"carousel-item roadmap-item\">\n        <img class=\"d-block w-100\" src=\"/assets/images/roadmap/2.jpeg\" />\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>2. Redesign Apis</h5>\n          <p>Include code migration, refinery, Architecturing, api documentation.</p>\n          <h5>Progressing</h5>\n        </div>\n      </div>\n      <div class=\"carousel-item roadmap-item\">\n        <img class=\"d-block w-100\" src=\"/assets/images/roadmap/3.jpg\" />\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>3. Lightweight and multiplatform Wallet</h5>\n          <p>After api and architectural redesign, VIG will be capable in handling lightweight wallet requests.</p>\n          <h5>Planned</h5>\n        </div>\n      </div>\n      <div class=\"carousel-item roadmap-item\">\n        <img class=\"d-block w-100\" src=\"/assets/images/global.jpg\" />\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h5>4. Node as a service for merchants</h5>\n          <p>After api and architectural redesign, VIG will be capable to implement a service for each node, where every\n            wallet can request at. Merchants can own their profits by operating a service node for users from all over the world.</p>\n          <h5>Planned</h5>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselRoadMap\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselRoadMap\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <h1 class=\"border-left\"><a name=\"wallet\"></a>Wallet</h1>\n  <div class=\"row wallet\">\n    <div class=\"col-sm\">\n      <h2>Windows 64bit</h2>\n      <p class=\"icon\">\n        <fa-icon [icon]=\"faWindows\"></fa-icon>\n      </p>\n      <a href=\"{{WindowsURL}}\" target=\"_blank\">\n        <fa-icon [icon]=\"faDownload\"></fa-icon>\n      </a>\n    </div>\n    <div class=\"col-sm\">\n      <h2>Linux 64bit</h2>\n      <p class=\"icon\">\n        <fa-icon [icon]=\"faLinux\"></fa-icon>\n      </p>\n      <a href=\"{{LinuxURL}}\" target=\"_blank\">\n        <fa-icon [icon]=\"faDownload\"></fa-icon>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <h1 class=\"border-left\"><a name=\"mining\"></a>Mining</h1>\n  <div class=\"row mining\">\n    <div class=\"col-sm\">\n      <h3> Official Mining Pool </h3>\n      <p>VIG is encouraging user customized pools.<br />\n        Before users building their pools, <br />\n        VIG is officially offering a pool for transactions and miners.<br />\n        It is <a href=\"https://pools.vigcoin.org\">https://pools.vigcoin.org</a>.<br />\n        It accepts new pools with more than ten miners.\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      <img src=\"/assets/images/mining.jpg\" />\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <h1 class=\"border-left\"><a name=\"development\"></a>Development</h1>\n  <div class=\"row mining\">\n    <div class=\"col-sm\">\n      <img src=\"/assets/images/software_dev.png\" />\n    </div>\n    <div class=\"col-sm\">\n      <h3> Open Source & Free Software </h3>\n      <p>VIG COIN is derived from the CryptoNote project which is an open source project.<br />\n        And VIG COIN is going further to be free software which is lincensed with GPL.<br />\n        That means VIG COIN source should not be closed by any private company<br />\n        The VIG COIN open source project group is located at <a\n          href=\"https://github.com/vigcoin\">https://github.com/vigcoin</a>.<br />\n        It it contains a lot of projects including coin core, wallet, pool, homepage, etc.<br />\n        The cryptonote-rust is created and maintained by the vig development team too.<br />\n        You can visit it at <a href=\"https://github.com/cryptonote-rust\">https://github.com/cryptonote-rust</a>.<br />\n      </p>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <h1 class=\"border-left\"><a name=\"contact\"></a>Contact</h1>\n  <div class=\"row contact\">\n    <div class=\"col-sm\">\n      <p><a href=\"https://gitter.im/vigcoin/development\" rel=\"nofollow\">\n          <img\n            src=\"https://camo.githubusercontent.com/2c168d16d807ef9dc2309f8dafac769c0453a929/68747470733a2f2f696d672e736869656c64732e696f2f6769747465722f726f6f6d2f6261646765732f736869656c64732e7376673f6c6f676f3d676974746572\"\n            alt=\"Gitter Chat\" data-canonical-src=\"https://img.shields.io/gitter/room/badges/shields.svg?logo=gitter\"\n            style=\"max-width:100%;\"></a>\n      </p>\n    </div>\n    <div class=\"col-sm\">\n\n      <p>\n        <a href=\"https://discord.gg/dWWDFKb\" rel=\"nofollow\"><img\n            src=\"https://camo.githubusercontent.com/e00425b0ac4026323168bfbe01cbebe8a434f1fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646973636f72642d6a6f696e253230636861742d626c75652e7376673f6c6f676f3d646973636f7264\"\n            alt=\"Discord\" data-canonical-src=\"https://img.shields.io/badge/discord-join%20chat-blue.svg?logo=discord\"\n            style=\"max-width:100%;\"></a>\n      </p>\n    </div>\n    <div class=\"col-sm\">\n      <p>\n        <a href=\"http://shang.qq.com/wpa/qunwpa?idkey=aa5b2ba04d44820536a6aad31e3d59fb3e43fbed4cbdf1215b204ed61f22036e\"\n          rel=\"nofollow\"><img\n            src=\"https://camo.githubusercontent.com/f8c1c6086515f245692d811dfbc178481c022a04/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c652d67726f7570253230636861742d677265656e2e7376673f6c6f6e6743616368653d74727565266c6162656c3d717126636f6c6f72423d626c7565266c6f676f3d646174613a696d6167652f7376672b786d6c3b6261736536342c50484e325a79426f5a576c6e61485139496a49344f434967646d6c6c64304a76654430694d434177494445794d5341784e445169494864705a48526f505349794e444969494868746247357a50534a6f644852774f693876643364334c6e637a4c6d39795a7938794d4441774c334e325a79492b50484268644767675a44306954545978494445304d6d4d744d544d674d4330794e5330304c544d794c544577624330784d69413159793079494449744d6941304c5445674e53417949444d674d7a55674d6941304e534178656d30774944424e4e6a45674d545179597a4579494441674d6a51744e43417a4d5330784d4777784d694131597a49674d694179494451674d5341314c5449674d79307a4e5341794c54513049444636625441674d4349675a6d6c736244306949325a68595749774e794976506a78775958526f49475139496b30324d5341324e324d794d43417749444d334c5451674e4449744e6d777a4c5446324c54566a4d4330794e7930784d7930314e5330304e6930314e53307a4d6941774c545131494449344c54513149445531646a56734d694178597a55674d6941794d6941324944517a49445a36625441674d4530784d5463674f5442734c5455744d544e6f4c544a6a4c544531494451744d7a55674e7930304f53413361433078597930784e4341774c544d7a4c544d744e446b744e306735544451674f54426a4c5459674d6a41744e4341794f4330794944493449444d674d5341784d6930784e5341784d6930784e53417749444532494445304944517749445132494451776144466a4d7a49674d4341304e6930794e4341304e6930304d434177494441674f5341784e6941784d6941784e534179494441674e4330344c5449744d6a67694c7a3438634746306143426b50534a4e4e446b674e44466a4c5451674d4330344c5455744f4330784d5341774c5463674d7930784d6941334c544579494455674d434134494455674f5341784d534177494459744e4341784d693034494445795454677749444d77597a41674e693030494445784c5467674d54467a4c5467744e6930344c544579597a45744e6941304c54457849446b744d5445674e434177494463674e534133494445794969426d615778735053496a5a6d5a6d4969382b50484268644767675a4430695454673449445577597930784c544d744d544d744e6930794e79303261433078597930784e4341774c54493249444d744d6a63674e6e5978597a45674d5341784e434134494449334944686f4d574d784d794177494449324c5463674d6a63744f4859744d5349675a6d6c736244306949325a68595749774e794976506a78775958526f49475139496b30314e43417a4d474d78494449744d5341314c544d674e533078494441744d7930794c544d744e4330784c544d674d53303149444d744e584d7a494445674d7941305454593249444d78597a45744d53417a4c5455674f53307a624449674d585978624330794944467a4c5451744d7930334944466f4c5446734c5445744d534976506a78775958526f49475139496b30324d5341344d3267744d5777744d7a4d744d79307949444978597a49674d6a49674d5455674d7a59674d7a55674d7a646f4d574d794d43307849444d7a4c54453149444d314c544d33624330794c5449784c544d7a49444d6949475a706247773949694e6d5a6d59694c7a3438634746306143426b50534a4e4d7a49674f4446324d6a4a7a4d5441674d6941794d434178566a6730624330794d43307a4969426d615778735053496a5a5749784f54497a4969382b50484268644767675a443069545445774e6941324d484d744d6a41674e7930304e53413361433078597930794e5341774c5451304c5463744e4455744e30773549446333597a4532494451674d7a59674f4341314d5341336144466a4d5455674d53417a4e53307a494455784c546436625441674d4349675a6d6c7362443069493256694d546b794d794976506a777663335a6e50673d3d\"\n            alt=\"QQ group\"\n            data-canonical-src=\"https://img.shields.io/badge/style-group%20chat-green.svg?longCache=true&amp;label=qq&amp;colorB=blue&amp;logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI4OCIgdmlld0JveD0iMCAwIDEyMSAxNDQiIHdpZHRoPSIyNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYxIDE0MmMtMTMgMC0yNS00LTMyLTEwbC0xMiA1Yy0yIDItMiA0LTEgNSAyIDMgMzUgMiA0NSAxem0wIDBNNjEgMTQyYzEyIDAgMjQtNCAzMS0xMGwxMiA1YzIgMiAyIDQgMSA1LTIgMy0zNSAyLTQ0IDF6bTAgMCIgZmlsbD0iI2ZhYWIwNyIvPjxwYXRoIGQ9Ik02MSA2N2MyMCAwIDM3LTQgNDItNmwzLTF2LTVjMC0yNy0xMy01NS00Ni01NS0zMiAwLTQ1IDI4LTQ1IDU1djVsMiAxYzUgMiAyMiA2IDQzIDZ6bTAgME0xMTcgOTBsLTUtMTNoLTJjLTE1IDQtMzUgNy00OSA3aC0xYy0xNCAwLTMzLTMtNDktN0g5TDQgOTBjLTYgMjAtNCAyOC0yIDI4IDMgMSAxMi0xNSAxMi0xNSAwIDE2IDE0IDQwIDQ2IDQwaDFjMzIgMCA0Ni0yNCA0Ni00MCAwIDAgOSAxNiAxMiAxNSAyIDAgNC04LTItMjgiLz48cGF0aCBkPSJNNDkgNDFjLTQgMC04LTUtOC0xMSAwLTcgMy0xMiA3LTEyIDUgMCA4IDUgOSAxMSAwIDYtNCAxMi04IDEyTTgwIDMwYzAgNi00IDExLTggMTFzLTgtNi04LTEyYzEtNiA0LTExIDktMTEgNCAwIDcgNSA3IDEyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTg4IDUwYy0xLTMtMTMtNi0yNy02aC0xYy0xNCAwLTI2IDMtMjcgNnYxYzEgMSAxNCA4IDI3IDhoMWMxMyAwIDI2LTcgMjctOHYtMSIgZmlsbD0iI2ZhYWIwNyIvPjxwYXRoIGQ9Ik01NCAzMGMxIDItMSA1LTMgNS0xIDAtMy0yLTMtNC0xLTMgMS01IDMtNXMzIDEgMyA0TTY2IDMxYzEtMSAzLTUgOS0zbDIgMXYxbC0yIDFzLTQtMy03IDFoLTFsLTEtMSIvPjxwYXRoIGQ9Ik02MSA4M2gtMWwtMzMtMy0yIDIxYzIgMjIgMTUgMzYgMzUgMzdoMWMyMC0xIDMzLTE1IDM1LTM3bC0yLTIxLTMzIDMiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzIgODF2MjJzMTAgMiAyMCAxVjg0bC0yMC0zIiBmaWxsPSIjZWIxOTIzIi8+PHBhdGggZD0iTTEwNiA2MHMtMjAgNy00NSA3aC0xYy0yNSAwLTQ0LTctNDUtN0w5IDc3YzE2IDQgMzYgOCA1MSA3aDFjMTUgMSAzNS0zIDUxLTd6bTAgMCIgZmlsbD0iI2ViMTkyMyIvPjwvc3ZnPg==\"\n            style=\"max-width:100%;\"></a></p>\n    </div>\n    <div class=\"col-sm\">\n      <p>\n\n        <a href=\"https://t1bao.com/c/vigcoin\"><img\n            src=\"https://img.shields.io/badge/t1bao-blue.svg?colorB=blue&label=%E7%94%B0%E4%B8%80%E5%9D%97%E8%AE%BA%E5%9D%9B&logo=data:image/png;base64,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\" />\n        </a>\n      </p>\n    </div>\n  </div>\n  <div class=\"row about\">\n    <div class=\"col-sm\">\n        <p>2017-2019 &copy; VIG COIN &trade;</p>\n        <p>All right reserved.</p>\n      </div>\n    <div class=\"col-sm\">\n      The VIG COIN Foundation\n    </div>\n    <div class=\"col-sm\">\n      <!-- Languages: -->\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  position: relative;\n  background: url(\"/assets/images/background.jpg\");\n  background-size: cover;\n  color: white;\n  border-radius: 0; }\n  .jumbotron #particles-js {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0; }\n  .jumbotron h1 {\n    color: #16b75c; }\n  .logo {\n  width: 25px; }\n  .btn-primary {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  position: relative; }\n  h1 {\n  border-width: 10px !important;\n  border-color: #dc3545 !important;\n  margin-left: 16px;\n  padding-left: 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #999; }\n  .philosophy {\n  position: relative; }\n  .philosophy h2 {\n    text-align: center;\n    color: #dc3545; }\n  .philosophy img {\n    width: 100%; }\n  .vigcoin {\n  background-color: #dc3545;\n  background-image: url(\"/assets/images/vigcoin.png\");\n  padding-bottom: 20px;\n  opacity: 0.9; }\n  .vigcoin h1 {\n    padding-top: 20px;\n    text-align: center;\n    color: white; }\n  .vigcoin p {\n    padding-left: 20px;\n    color: #ccc; }\n  .roadmap-item h1 {\n  text-align: center; }\n  .roadmap-item img {\n  width: 100%;\n  height: 400px; }\n  .wallet {\n  text-align: center;\n  color: #16b75c; }\n  .wallet .icon {\n    font-size: 64px;\n    color: #999; }\n  .wallet a {\n    font-size: 32px; }\n  .mining {\n  text-align: center; }\n  .mining h3 {\n    font-size: 36px;\n    color: #dc3545; }\n  .mining img {\n    width: 100%; }\n  .mining p {\n    font-size: 32px;\n    color: #ccc; }\n  .contact {\n  text-align: center; }\n  .contact img {\n    width: 80%; }\n  .about {\n  text-align: center;\n  background-color: #333;\n  color: white;\n  height: 200px;\n  padding: 50px 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VyaWMvdmlnY29pbi5vcmcvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFMbEI7SUFPSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQU87SUFDUCxNQUFNO0lBQ04sU0FBUyxFQUFBO0VBWGI7SUFjSSxjQUFjLEVBQUE7RUFJbEI7RUFDRSxXQUFXLEVBQUE7RUFHYjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7RUFHcEI7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7RUFHYjtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBR0ksa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTtFQUpsQjtJQU9JLFdBQVcsRUFBQTtFQUtmO0VBQ0UseUJBQXlCO0VBQ3pCLG1EQUFtRDtFQUNuRCxvQkFBb0I7RUFDcEIsWUFBWSxFQUFBO0VBSmQ7SUFNSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtFQVJoQjtJQVdJLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFJZjtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0VBS0ksV0FBVztFQUNYLGFBQWEsRUFBQTtFQUlqQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7RUFGaEI7SUFJSSxlQUFlO0lBQ2YsV0FBVyxFQUFBO0VBTGY7SUFRSSxlQUFlLEVBQUE7RUFJbkI7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUdJLGVBQWU7SUFFZixjQUNGLEVBQUE7RUFORjtJQVFJLFdBQVcsRUFBQTtFQVJmO0lBV0ksZUFBZTtJQUNmLFdBQVcsRUFBQTtFQUlmO0VBQ0Usa0JBQWtCLEVBQUE7RUFEcEI7SUFHSSxVQUFVLEVBQUE7RUFJZDtFQUNFLGtCQUFrQjtFQUVsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gICNwYXJ0aWNsZXMtanMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OjA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuICBoMSB7XG4gICAgY29sb3I6ICMxNmI3NWM7XG4gIH1cbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMjVweDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmgxIHtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnBoaWxvc29waHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNkYzM1NDU7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5cbi52aWdjb2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvdmlnY29pbi5wbmdcIik7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBvcGFjaXR5OiAwLjk7XG4gIGgxIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIHAge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBjb2xvcjogI2NjYztcbiAgfVxufVxuXG4ucm9hZG1hcC1pdGVtIHtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cblxuLndhbGxldCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxNmI3NWM7XG4gIC5pY29uIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbiAgYSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG59XG5cbi5taW5pbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG5cbiAgICBjb2xvcjogI2RjMzU0NVxuICB9XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGNvbG9yOiAjY2NjO1xuICB9XG59XG5cbi5jb250YWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLmFib3V0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9nbG9iYWwuanBnXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDUwcHggMjBweDtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'vigcoin';
        this.supportedLanguages = ['en', 'zh'];
        this.faWindows = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWindows"];
        this.faLinux = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinux"];
        this.faCloud = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCloud"];
        this.faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDownload"];
        this.active = 0;
        this.WindowsURL = "https://github.com/vigcoin/wallet/releases/download/1.0.0-b1/vigcoin-wallet-installer-v1.0.0-b2.msi";
        this.LinuxURL = "https://github.com/vigcoin/wallet/releases/download/1.0.0-b1/VIGCOIN-x86_64.AppImage";
        this.setLocale(this.getLocaleString());
    }
    AppComponent.prototype.getLocaleString = function () {
        var locale = navigator.language;
        if (this.supportedLanguages.indexOf(locale) !== -1) {
            return locale;
        }
        locale = locale.split('-')[0];
        if (this.supportedLanguages.indexOf(locale) !== -1) {
            return locale;
        }
        return 'en';
    };
    AppComponent.prototype.setLocale = function (locale) {
        this.translate.setDefaultLang(locale);
        this.translate.use(locale);
    };
    AppComponent.prototype.ngOnInit = function () {
        particlesJS.load('particles-js', "/assets/particles.json", function () {
            console.log('callback - particles.js config loaded');
        });
        $('.carousel').carousel({
            interval: 10000
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eric/vigcoin.org/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map