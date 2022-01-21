/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./mainDevFolder/server/db/index.ts":
/*!******************************************!*\
  !*** ./mainDevFolder/server/db/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Query = void 0;
var mysql = __webpack_require__(/*! mysql */ "mysql");
var queries_nutrientmap_1 = __webpack_require__(/*! ./nutrientmap/queries_nutrientmap */ "./mainDevFolder/server/db/nutrientmap/queries_nutrientmap/index.ts");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var mysqlAccess = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
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
exports["default"] = queries_nutrientmap_1.default;


/***/ }),

/***/ "./mainDevFolder/server/db/nutrientmap/index.ts":
/*!******************************************************!*\
  !*** ./mainDevFolder/server/db/nutrientmap/index.ts ***!
  \******************************************************/
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
var queries_nutrientmap_1 = __webpack_require__(/*! ./queries_nutrientmap */ "./mainDevFolder/server/db/nutrientmap/queries_nutrientmap/index.ts");
var app = express();
app.all('/nutrientmap/client', function (req, res, error) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, new_Data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(req.body);
                _a = req.method;
                switch (_a) {
                    case 'GET': return [3 /*break*/, 1];
                    case 'POST': return [3 /*break*/, 3];
                    case 'PUT': return [3 /*break*/, 5];
                    case 'DELETE': return [3 /*break*/, 7];
                }
                return [3 /*break*/, 9];
            case 1: return [4 /*yield*/, queries_nutrientmap_1.default.allMessages()];
            case 2:
                new_Data = _b.sent();
                new_Data.map(function (i) {
                    console.log(i);
                });
                res.json(new_Data);
                return [3 /*break*/, 10];
            case 3: return [4 /*yield*/, queries_nutrientmap_1.default.insertCLIENT(req.body)];
            case 4:
                _b.sent();
                res.json(req.body);
                return [3 /*break*/, 10];
            case 5: return [4 /*yield*/, queries_nutrientmap_1.default.updateMessages(req.body, req.body.id)];
            case 6:
                _b.sent();
                res.send(200);
                return [3 /*break*/, 10];
            case 7: return [4 /*yield*/, queries_nutrientmap_1.default.deleteMessages(req.body.id)];
            case 8:
                _b.sent();
                res.send(req.method);
                return [3 /*break*/, 10];
            case 9:
                res.send();
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); });
app.all('/nutrientmap/institution/:id', function (req, res, error) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, new_Data, insertId;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.method;
                switch (_a) {
                    case 'GET': return [3 /*break*/, 1];
                    case 'POST': return [3 /*break*/, 3];
                    case 'PUT': return [3 /*break*/, 5];
                    case 'DELETE': return [3 /*break*/, 7];
                }
                return [3 /*break*/, 9];
            case 1: return [4 /*yield*/, queries_nutrientmap_1.default.allMessages()];
            case 2:
                new_Data = _b.sent();
                new_Data.map(function (i) {
                    console.log(i);
                });
                res.json(new_Data);
                return [3 /*break*/, 10];
            case 3:
                req.body.client_Id = req.params.id;
                console.log(req.body);
                return [4 /*yield*/, queries_nutrientmap_1.default.insertInstitution(req.body)];
            case 4:
                insertId = (_b.sent()).insertId;
                console.log(insertId);
                res.send(req.method);
                return [3 /*break*/, 10];
            case 5: return [4 /*yield*/, queries_nutrientmap_1.default.updateMessages(req.body, req.body.id)];
            case 6:
                _b.sent();
                res.send(200);
                return [3 /*break*/, 10];
            case 7: return [4 /*yield*/, queries_nutrientmap_1.default.deleteMessages(req.body.id)];
            case 8:
                _b.sent();
                res.send(req.method);
                return [3 /*break*/, 10];
            case 9:
                res.send();
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); });
exports["default"] = app;


/***/ }),

/***/ "./mainDevFolder/server/db/nutrientmap/queries_nutrientmap/index.ts":
/*!**************************************************************************!*\
  !*** ./mainDevFolder/server/db/nutrientmap/queries_nutrientmap/index.ts ***!
  \**************************************************************************/
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
    return [2 /*return*/, (0, index_1.Query)('SELECT * FROM Nutrientmap.lifestagereference')];
}); }); };
// const singleChirp = async (id:string) => Query('SELECT * FROM Chirps WHERE id = ?',[id]);
var deleteMessages = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('DELETE FROM contact WHERE id = ?', [id])];
}); }); };
var insertCLIENT = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('INSERT INTO Nutrientmap.client SET ?', values)];
}); }); };
var insertInstitution = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('INSERT INTO Nutrientmap.institution SET ?', values)];
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
    insertCLIENT: insertCLIENT,
    updateMessages: updateMessages,
    insertInstitution: insertInstitution
    // allUsers,
    // insertUsers,
    // insertPhysical
};


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***************************************!*\
  !*** ./mainDevFolder/server/index.ts ***!
  \***************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
var cors = __webpack_require__(/*! cors */ "cors");
var nutrientmap_1 = __webpack_require__(/*! ./db/nutrientmap */ "./mainDevFolder/server/db/nutrientmap/index.ts");
var app = express();
app.use(cors());
app.use(express.json());
app.use(nutrientmap_1.default);
// app.post('/post', async (req,res) =>{
//     let firstdata= req.body[0]
//     const data = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${firstdata}&pageSize=11&api_key=tz8FikxFkSfY7V5vpSChMeqgxthoR9ILcvLtA0Ya`)
//     const item = await data.json()
//     item.foods[0].foodNutrients.map((i:any)=>{console.log(i)})
//     res.send(item)
// })
// app.use('/', async (req,res)=>{
//     let brandName= 'McDouble'
//     const data = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${brandName}&pageSize=11&api_key=tz8FikxFkSfY7V5vpSChMeqgxthoR9ILcvLtA0Ya`)
//     const reply=await data.json();
//   console.log(req.headers)
//     reply.foods.map((i:any)=>{
//         res.json({fdc:i.fdcId,description:i.description,foodNutrients:i.foodNutrients})
//     })
// })
app.post('/', function (req, res) {
    console.log(req);
    res.json(req.body);
});
app.listen(4000);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7Ozs7Ozs7O0FDdEJBLDREQUFtQztBQUNuQyxtREFBNkI7QUFDN0Isa0hBQTJDO0FBSTNDLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDZixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFXLENBQUM7QUFFcEIsd0NBQXdDO0FBQ3hDLGlDQUFpQztBQUVqQywrSkFBK0o7QUFDL0oscUNBQXFDO0FBRXJDLGlFQUFpRTtBQUVqRSxxQkFBcUI7QUFDckIsS0FBSztBQUVMLGtDQUFrQztBQUNsQyxnQ0FBZ0M7QUFDaEMsK0pBQStKO0FBQy9KLHFDQUFxQztBQUNyQyw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLDBGQUEwRjtBQUUxRixTQUFTO0FBQ1QsS0FBSztBQUVMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLFVBQUMsR0FBRyxFQUFDLEdBQUc7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQWFGLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy8uL21haW5EZXZGb2xkZXIvc2VydmVyL2RiL2luZGV4LnRzIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvLi9tYWluRGV2Rm9sZGVyL3NlcnZlci9kYi9udXRyaWVudG1hcC9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzLy4vbWFpbkRldkZvbGRlci9zZXJ2ZXIvZGIvbnV0cmllbnRtYXAvcXVlcmllc19udXRyaWVudG1hcC9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL2V4dGVybmFsIGNvbW1vbmpzIFwibXlzcWxcIiIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvLi9tYWluRGV2Rm9sZGVyL3NlcnZlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBteXNxbCBmcm9tICdteXNxbCc7XG5pbXBvcnQgZGF0YWJhc2VfRnVuY3Rpb24gZnJvbSAnLi9udXRyaWVudG1hcC9xdWVyaWVzX251dHJpZW50bWFwJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcblxuXG5cblxuXG5jb25zdCBteXNxbEFjY2VzcyA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICAgIGhvc3Q6cHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICBwb3J0Ok51bWJlcihwcm9jZXNzLmVudi5EQl9QT1JUKSxcbiAgICB1c2VyOnByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgcGFzc3dvcmQ6cHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXG4gICAgZGF0YWJhc2U6cHJvY2Vzcy5lbnYuREFUQUJBU0Vcbn0pXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IChxdWVyeTpzdHJpbmcsdmFsdWVzPzpBcnJheTxzdHJpbmd8bnVtYmVyPik9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8YW55Pj4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShxdWVyeSx2YWx1ZXMsKGVycixyZXN1bHRzKSA9PntcbiAgICAgICAgICAgIGlmKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfSlcbiAgICB9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YWJhc2VfRnVuY3Rpb247IiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGRhdGFiYXNlX0Z1bmN0aW9uIGZyb20gJy4vcXVlcmllc19udXRyaWVudG1hcCdcblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmFwcC5hbGwoJy9udXRyaWVudG1hcC9jbGllbnQnLCBhc3luYyAocmVxLCByZXMsIGVycm9yKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOlxuICAgICAgY29uc3QgbmV3X0RhdGEgPSBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi5hbGxNZXNzYWdlcygpXG4gICAgICBuZXdfRGF0YS5tYXAoaSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICB9KTtcbiAgICAgIHJlcy5qc29uKG5ld19EYXRhKVxuICAgICAgXG4gICAgICBicmVhaztcbiAgICBjYXNlICdQT1NUJzpcbiAgICAgIGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmluc2VydENMSUVOVChyZXEuYm9keSlcbiAgICAgIHJlcy5qc29uKHJlcS5ib2R5KVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQVVQnOlxuICAgICAgYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24udXBkYXRlTWVzc2FnZXMocmVxLmJvZHksIHJlcS5ib2R5LmlkKVxuICAgICAgcmVzLnNlbmQoMjAwKVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdERUxFVEUnOlxuICAgICAgYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24uZGVsZXRlTWVzc2FnZXMocmVxLmJvZHkuaWQpXG4gICAgICByZXMuc2VuZChyZXEubWV0aG9kKVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuXG4gICAgICByZXMuc2VuZCgpXG4gICAgICBicmVhaztcbiAgfVxufSlcblxuYXBwLmFsbCgnL251dHJpZW50bWFwL2luc3RpdHV0aW9uLzppZCcsIGFzeW5jIChyZXEsIHJlcywgZXJyb3IpID0+IHtcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIGNvbnN0IG5ld19EYXRhID0gYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24uYWxsTWVzc2FnZXMoKVxuICAgICAgbmV3X0RhdGEubWFwKGkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgICAgfSk7XG4gICAgICByZXMuanNvbihuZXdfRGF0YSlcbiAgICAgIFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICByZXEuYm9keS5jbGllbnRfSWQgPSByZXEucGFyYW1zLmlkXG4gICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcblxuICAgICAgbGV0IHtpbnNlcnRJZH06YW55ID0gYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24uaW5zZXJ0SW5zdGl0dXRpb24ocmVxLmJvZHkpXG4gICAgICBjb25zb2xlLmxvZyhpbnNlcnRJZClcbiAgICAgIHJlcy5zZW5kKHJlcS5tZXRob2QpXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BVVCc6XG4gICAgICBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi51cGRhdGVNZXNzYWdlcyhyZXEuYm9keSwgcmVxLmJvZHkuaWQpXG4gICAgICByZXMuc2VuZCgyMDApXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgICBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi5kZWxldGVNZXNzYWdlcyhyZXEuYm9keS5pZClcbiAgICAgIHJlcy5zZW5kKHJlcS5tZXRob2QpXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG5cbiAgICAgIHJlcy5zZW5kKClcbiAgICAgIGJyZWFrO1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBhcHBcbiIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XG5cblxuY29uc3QgYWxsTWVzc2FnZXMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBOdXRyaWVudG1hcC5saWZlc3RhZ2VyZWZlcmVuY2UnKTtcbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG5jb25zdCBkZWxldGVNZXNzYWdlcz0gYXN5bmMoaWQ6c3RyaW5nKT0+UXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbmNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jKHZhbHVlcyA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5jbGllbnQgU0VUID8nICx2YWx1ZXMpO1xuY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyh2YWx1ZXMgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nICx2YWx1ZXMpO1xuXG5jb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OmFueSxpZDphbnkpID0+UXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYWxsTWVzc2FnZXMsXG4gICAgLy8gc2luZ2xlQ2hpcnAsXG4gICAgZGVsZXRlTWVzc2FnZXMsXG4gICAgaW5zZXJ0Q0xJRU5ULFxuICAgIHVwZGF0ZU1lc3NhZ2VzLFxuICAgIGluc2VydEluc3RpdHV0aW9uXG4gICAgLy8gYWxsVXNlcnMsXG4gICAgLy8gaW5zZXJ0VXNlcnMsXG4gICAgLy8gaW5zZXJ0UGh5c2ljYWxcbiAgICBcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJteXNxbFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgTnV0cmllbnRtYXAgZnJvbSAnLi9kYi9udXRyaWVudG1hcCc7XG5pbXBvcnQgKiBhcyBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29ycygpKVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC51c2UoTnV0cmllbnRtYXApXG5cbi8vIGFwcC5wb3N0KCcvcG9zdCcsIGFzeW5jIChyZXEscmVzKSA9Pntcbi8vICAgICBsZXQgZmlyc3RkYXRhPSByZXEuYm9keVswXVxuXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5uYWwudXNkYS5nb3YvZmRjL3YxL2Zvb2RzL3NlYXJjaD9xdWVyeT0ke2ZpcnN0ZGF0YX0mcGFnZVNpemU9MTEmYXBpX2tleT10ejhGaWt4RmtTZlk3VjV2cFNDaE1lcWd4dGhvUjlJTGN2THRBMFlhYClcbi8vICAgICBjb25zdCBpdGVtID0gYXdhaXQgZGF0YS5qc29uKClcblxuLy8gICAgIGl0ZW0uZm9vZHNbMF0uZm9vZE51dHJpZW50cy5tYXAoKGk6YW55KT0+e2NvbnNvbGUubG9nKGkpfSlcblxuLy8gICAgIHJlcy5zZW5kKGl0ZW0pXG4vLyB9KVxuXG4vLyBhcHAudXNlKCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XG4vLyAgICAgbGV0IGJyYW5kTmFtZT0gJ01jRG91YmxlJ1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubmFsLnVzZGEuZ292L2ZkYy92MS9mb29kcy9zZWFyY2g/cXVlcnk9JHticmFuZE5hbWV9JnBhZ2VTaXplPTExJmFwaV9rZXk9dHo4RmlreEZrU2ZZN1Y1dnBTQ2hNZXFneHRob1I5SUxjdkx0QTBZYWApXG4vLyAgICAgY29uc3QgcmVwbHk9YXdhaXQgZGF0YS5qc29uKCk7XG4vLyAgIGNvbnNvbGUubG9nKHJlcS5oZWFkZXJzKVxuLy8gICAgIHJlcGx5LmZvb2RzLm1hcCgoaTphbnkpPT57XG4vLyAgICAgICAgIHJlcy5qc29uKHtmZGM6aS5mZGNJZCxkZXNjcmlwdGlvbjppLmRlc2NyaXB0aW9uLGZvb2ROdXRyaWVudHM6aS5mb29kTnV0cmllbnRzfSlcblxuLy8gICAgIH0pXG4vLyB9KVxuXG5hcHAucG9zdCgnLycsKHJlcSxyZXMpPT57XG4gICAgY29uc29sZS5sb2cocmVxKVxuICAgIHJlcy5qc29uKHJlcS5ib2R5KVxufSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmFwcC5saXN0ZW4oNDAwMClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=