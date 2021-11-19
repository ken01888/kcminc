/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./mainDevFolder/server/db/clients/index.ts":
/*!**************************************************!*\
  !*** ./mainDevFolder/server/db/clients/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
var query_clients_1 = __webpack_require__(/*! ./query_clients */ "./mainDevFolder/server/db/clients/query_clients/index.ts");
var app = express();
app.all('/client_suite', function (req, res, error) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.method;
                switch (_a) {
                    case 'GET': return [3 /*break*/, 1];
                    case 'POST': return [3 /*break*/, 2];
                    case 'PUT': return [3 /*break*/, 4];
                    case 'DELETE': return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 1: 
            // const new_Data = await database_Function.allMessages()
            // new_Data.map(i => {
            //   console.log(i)
            // });
            // res.json(new_Data)
            return [3 /*break*/, 9];
            case 2: return [4 /*yield*/, query_clients_1.default.insertMessages(req.body)];
            case 3:
                _b.sent();
                res.send(req.method);
                return [3 /*break*/, 9];
            case 4: return [4 /*yield*/, query_clients_1.default.updateMessages(req.body, req.body.id)];
            case 5:
                _b.sent();
                res.send(200);
                return [3 /*break*/, 9];
            case 6: return [4 /*yield*/, query_clients_1.default.deleteMessages(req.body.id)];
            case 7:
                _b.sent();
                res.send(req.method);
                return [3 /*break*/, 9];
            case 8:
                res.send();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
exports["default"] = app;


/***/ }),

/***/ "./mainDevFolder/server/db/clients/query_clients/index.ts":
/*!****************************************************************!*\
  !*** ./mainDevFolder/server/db/clients/query_clients/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var index_1 = __webpack_require__(/*! ../../index */ "./mainDevFolder/server/db/index.ts");
var allMessages = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('SELECT * FROM contact')];
}); }); };
// const singleChirp = async (id:string) => Query('SELECT * FROM Chirps WHERE id = ?',[id]);
var deleteMessages = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('DELETE FROM contact WHERE id = ?', [id])];
}); }); };
var insertMessages = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('INSERT INTO contact SET ?', values)];
}); }); };
var updateMessages = function (newContent, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('UPDATE contact SET ? WHERE id = ?', [newContent, id])
        // const allUsers = async () => Query('SELECT * FROM Users');
        // const insertUsers = async(user :any )=>Query('INSERT INTO clients SET ?' ,[user]);
        // const insertPhysical = async(physical :any,clientid:number )=>Query('INSERT INTO client_lifestyle SET ?' ,[physical]);
    ];
}); }); };
// const allUsers = async () => Query('SELECT * FROM Users');
// const insertUsers = async(user :any )=>Query('INSERT INTO clients SET ?' ,[user]);
// const insertPhysical = async(physical :any,clientid:number )=>Query('INSERT INTO client_lifestyle SET ?' ,[physical]);
exports["default"] = {
    allMessages: allMessages,
    // singleChirp,
    deleteMessages: deleteMessages,
    insertMessages: insertMessages,
    updateMessages: updateMessages,
    // allUsers,
    // insertUsers,
    // insertPhysical
};


/***/ }),

/***/ "./mainDevFolder/server/db/index.ts":
/*!******************************************!*\
  !*** ./mainDevFolder/server/db/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Query = void 0;
var mysql = __webpack_require__(/*! mysql */ "mysql");
var query_clients_1 = __webpack_require__(/*! ./clients/query_clients */ "./mainDevFolder/server/db/clients/query_clients/index.ts");
var mysqlAccess = mysql.createPool({
    host: 'test-connection-aws-rds.cf2pfdin25py.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: '4#MiSgh!4',
    database: 'TEMPLATE'
});
var Query = function (query, values) {
    return new Promise(function (resolve, reject) {
        mysqlAccess.query(query, values, function (err, results) {
            if (err)
                return reject(err);
            return resolve(results);
        });
    });
};
exports.Query = Query;
exports["default"] = query_clients_1.default;


/***/ }),

/***/ "./mainDevFolder/server/index.ts":
/*!***************************************!*\
  !*** ./mainDevFolder/server/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
var cors = __webpack_require__(/*! cors */ "cors");
var clients_1 = __webpack_require__(/*! ./db/clients */ "./mainDevFolder/server/db/clients/index.ts");
var fetch = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
var app = express();
app.use(cors());
app.use(express.json());
app.use(clients_1.default);
app.post('/post', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var firstdata, data, item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                firstdata = req.body[0];
                return [4 /*yield*/, fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query=" + firstdata + "&pageSize=11&api_key=tz8FikxFkSfY7V5vpSChMeqgxthoR9ILcvLtA0Ya")];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                item = _a.sent();
                console.log(item);
                res.send(item);
                return [2 /*return*/];
        }
    });
}); });
app.use('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var brandName, data, reply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                brandName = 'McDouble';
                return [4 /*yield*/, fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query=" + brandName + "&pageSize=11&api_key=tz8FikxFkSfY7V5vpSChMeqgxthoR9ILcvLtA0Ya")];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                reply = _a.sent();
                console.log(req.headers);
                reply.foods.map(function (i) {
                    res.json({ fdc: i.fdcId, description: i.description, foodNutrients: i.foodNutrients });
                });
                return [2 /*return*/];
        }
    });
}); });
app.listen(4000);


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./mainDevFolder/server/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx3REFBc0QsU0FBUyxrRUFBK0QsQ0FBQzs7Z0JBQWxKLElBQUksR0FBRyxTQUEySTtnQkFDNUkscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRTs7Z0JBQXZCLEtBQUssR0FBQyxTQUFpQjtnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2dCQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUs7b0JBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBQyxDQUFDO2dCQUVuRixDQUFDLENBQUM7Ozs7S0FDTCxDQUFDO0FBV0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7O0FDM0NoQjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvLi9tYWluRGV2Rm9sZGVyL3NlcnZlci9kYi9jbGllbnRzL2luZGV4LnRzIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvLi9tYWluRGV2Rm9sZGVyL3NlcnZlci9kYi9jbGllbnRzL3F1ZXJ5X2NsaWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy8uL21haW5EZXZGb2xkZXIvc2VydmVyL2RiL2luZGV4LnRzIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvLi9tYWluRGV2Rm9sZGVyL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy9leHRlcm5hbCBjb21tb25qcyBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL2V4dGVybmFsIGNvbW1vbmpzIFwibXlzcWxcIiIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGRhdGFiYXNlX0Z1bmN0aW9uIGZyb20gJy4vcXVlcnlfY2xpZW50cydcblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmFwcC5hbGwoJy9jbGllbnRfc3VpdGUnLCBhc3luYyAocmVxLCByZXMsIGVycm9yKSA9PiB7XG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICAvLyBjb25zdCBuZXdfRGF0YSA9IGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmFsbE1lc3NhZ2VzKClcbiAgICAgIC8vIG5ld19EYXRhLm1hcChpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coaSlcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gcmVzLmpzb24obmV3X0RhdGEpXG4gICAgICBcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BPU1QnOlxuXG4gICAgICBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi5pbnNlcnRNZXNzYWdlcyhyZXEuYm9keSlcbiAgICAgIHJlcy5zZW5kKHJlcS5tZXRob2QpXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BVVCc6XG4gICAgICBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi51cGRhdGVNZXNzYWdlcyhyZXEuYm9keSwgcmVxLmJvZHkuaWQpXG4gICAgICByZXMuc2VuZCgyMDApXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgICBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi5kZWxldGVNZXNzYWdlcyhyZXEuYm9keS5pZClcbiAgICAgIHJlcy5zZW5kKHJlcS5tZXRob2QpXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG5cbiAgICAgIHJlcy5zZW5kKClcbiAgICAgIGJyZWFrO1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBhcHBcbiIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XG5cblxuY29uc3QgYWxsTWVzc2FnZXMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBjb250YWN0Jyk7XG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuY29uc3QgZGVsZXRlTWVzc2FnZXM9IGFzeW5jKGlkOnN0cmluZyk9PlF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsW2lkXSk7XG5jb25zdCBpbnNlcnRNZXNzYWdlcyA9IGFzeW5jKHZhbHVlcyA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjb250YWN0IFNFVCA/JyAsdmFsdWVzKTtcbmNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6YW55LGlkOmFueSkgPT5RdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbGxNZXNzYWdlcyxcbiAgICAvLyBzaW5nbGVDaGlycCxcbiAgICBkZWxldGVNZXNzYWdlcyxcbiAgICBpbnNlcnRNZXNzYWdlcyxcbiAgICB1cGRhdGVNZXNzYWdlcyxcbiAgICAvLyBhbGxVc2VycyxcbiAgICAvLyBpbnNlcnRVc2VycyxcbiAgICAvLyBpbnNlcnRQaHlzaWNhbFxuICAgIFxufSIsImltcG9ydCAqIGFzIG15c3FsIGZyb20gJ215c3FsJztcbmltcG9ydCBkYXRhYmFzZV9GdW5jdGlvbiBmcm9tICcuL2NsaWVudHMvcXVlcnlfY2xpZW50cydcblxuXG5cblxuY29uc3QgbXlzcWxBY2Nlc3MgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICBob3N0Oid0ZXN0LWNvbm5lY3Rpb24tYXdzLXJkcy5jZjJwZmRpbjI1cHkudXMtZWFzdC0xLnJkcy5hbWF6b25hd3MuY29tJyxcbiAgICBwb3J0OjMzMDYsXG4gICAgdXNlcjonYWRtaW4nLFxuICAgIHBhc3N3b3JkOic0I01pU2doITQnLFxuICAgIGRhdGFiYXNlOidURU1QTEFURSdcbn0pXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IChxdWVyeTpzdHJpbmcsdmFsdWVzPzpBcnJheTxzdHJpbmd8bnVtYmVyPik9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8YW55Pj4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShxdWVyeSx2YWx1ZXMsKGVycixyZXN1bHRzKSA9PntcbiAgICAgICAgICAgIGlmKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzKTtcblxuXG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFiYXNlX0Z1bmN0aW9uOyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IGNsaWVudERhdGUgZnJvbSAnLi9kYi9jbGllbnRzJztcbmltcG9ydCAqIGFzIGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShjbGllbnREYXRlKVxuXG5hcHAucG9zdCgnL3Bvc3QnLCBhc3luYyAocmVxLHJlcykgPT57XG4gICAgbGV0IGZpcnN0ZGF0YT0gcmVxLmJvZHlbMF1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubmFsLnVzZGEuZ292L2ZkYy92MS9mb29kcy9zZWFyY2g/cXVlcnk9JHtmaXJzdGRhdGF9JnBhZ2VTaXplPTExJmFwaV9rZXk9dHo4RmlreEZrU2ZZN1Y1dnBTQ2hNZXFneHRob1I5SUxjdkx0QTBZYWApXG4gICAgY29uc3QgaXRlbSA9IGF3YWl0IGRhdGEuanNvbigpXG5cbiAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgIFxuICAgIHJlcy5zZW5kKGl0ZW0pXG59KVxuXG5hcHAudXNlKCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XG4gICAgbGV0IGJyYW5kTmFtZT0gJ01jRG91YmxlJ1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubmFsLnVzZGEuZ292L2ZkYy92MS9mb29kcy9zZWFyY2g/cXVlcnk9JHticmFuZE5hbWV9JnBhZ2VTaXplPTExJmFwaV9rZXk9dHo4RmlreEZrU2ZZN1Y1dnBTQ2hNZXFneHRob1I5SUxjdkx0QTBZYWApXG4gICAgY29uc3QgcmVwbHk9YXdhaXQgZGF0YS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHJlcS5oZWFkZXJzKVxuICAgIHJlcGx5LmZvb2RzLm1hcCgoaTphbnkpPT57XG4gICAgICAgIHJlcy5qc29uKHtmZGM6aS5mZGNJZCxkZXNjcmlwdGlvbjppLmRlc2NyaXB0aW9uLGZvb2ROdXRyaWVudHM6aS5mb29kTnV0cmllbnRzfSlcblxuICAgIH0pXG59KVxuXG5cblxuXG5cblxuXG5cblxuXG5hcHAubGlzdGVuKDQwMDApXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWxcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbWFpbkRldkZvbGRlci9zZXJ2ZXIvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=