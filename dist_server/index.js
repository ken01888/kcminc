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
var mysqlAccess = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'me',
    password: 'password',
    database: 'Nutrientmap'
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
            case 3: return [4 /*yield*/, queries_nutrientmap_1.default.insertCLIENT(req.body)];
            case 4:
                insertId = (_b.sent()).insertId;
                res.json(insertId);
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
    var _a, new_Data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.method;
                switch (_a) {
                    case 'GET': return [3 /*break*/, 1];
                    case 'POST': return [3 /*break*/, 3];
                    case 'PUT': return [3 /*break*/, 4];
                    case 'DELETE': return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 1: return [4 /*yield*/, queries_nutrientmap_1.default.allMessages()];
            case 2:
                new_Data = _b.sent();
                new_Data.map(function (i) {
                    console.log(i);
                });
                res.json(new_Data);
                return [3 /*break*/, 9];
            case 3:
                req.body.client_Id = req.params.id;
                console.log(req.body);
                // let {insertId}:any = await database_Function.insertInstitution(req.body)
                // console.log(insertId)
                res.send(req.method);
                return [3 /*break*/, 9];
            case 4: return [4 /*yield*/, queries_nutrientmap_1.default.updateMessages(req.body, req.body.id)];
            case 5:
                _b.sent();
                res.send(200);
                return [3 /*break*/, 9];
            case 6: return [4 /*yield*/, queries_nutrientmap_1.default.deleteMessages(req.body.id)];
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
app.get('/', function (req, res) {
    res.send('hello');
});
app.listen(4000);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUVqRSxxQkFBcUI7QUFDckIsS0FBSztBQUVMLGtDQUFrQztBQUNsQyxnQ0FBZ0M7QUFDaEMsK0pBQStKO0FBQy9KLHFDQUFxQztBQUNyQyw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLDBGQUEwRjtBQUUxRixTQUFTO0FBQ1QsS0FBSztBQUVMLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLFVBQUMsR0FBRyxFQUFDLEdBQUc7SUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBYUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzLy4vbWFpbkRldkZvbGRlci9zZXJ2ZXIvZGIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy8uL21haW5EZXZGb2xkZXIvc2VydmVyL2RiL251dHJpZW50bWFwL2luZGV4LnRzIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvLi9tYWluRGV2Rm9sZGVyL3NlcnZlci9kYi9udXRyaWVudG1hcC9xdWVyaWVzX251dHJpZW50bWFwL2luZGV4LnRzIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL2V4dGVybmFsIGNvbW1vbmpzIFwibXlzcWxcIiIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvLi9tYWluRGV2Rm9sZGVyL3NlcnZlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBteXNxbCBmcm9tICdteXNxbCc7XG5pbXBvcnQgZGF0YWJhc2VfRnVuY3Rpb24gZnJvbSAnLi9udXRyaWVudG1hcC9xdWVyaWVzX251dHJpZW50bWFwJ1xuXG5cblxuXG5jb25zdCBteXNxbEFjY2VzcyA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICAgIGhvc3Q6JzEyNy4wLjAuMScsXG4gICAgcG9ydDozMzA2LFxuICAgIHVzZXI6J21lJyxcbiAgICBwYXNzd29yZDoncGFzc3dvcmQnLFxuICAgIGRhdGFiYXNlOidOdXRyaWVudG1hcCdcbn0pXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IChxdWVyeTpzdHJpbmcsdmFsdWVzPzpBcnJheTxzdHJpbmd8bnVtYmVyPik9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8YW55Pj4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShxdWVyeSx2YWx1ZXMsKGVycixyZXN1bHRzKSA9PntcbiAgICAgICAgICAgIGlmKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzKTtcblxuXG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFiYXNlX0Z1bmN0aW9uOyIsImltcG9ydCB7IGRhdGEgfSBmcm9tICdhdXRvcHJlZml4ZXInXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgZGF0YWJhc2VfRnVuY3Rpb24gZnJvbSAnLi9xdWVyaWVzX251dHJpZW50bWFwJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuYXBwLmFsbCgnL251dHJpZW50bWFwL2NsaWVudCcsIGFzeW5jIChyZXEsIHJlcywgZXJyb3IpID0+IHtcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIGNvbnN0IG5ld19EYXRhID0gYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24uYWxsTWVzc2FnZXMoKVxuICAgICAgbmV3X0RhdGEubWFwKGkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgICAgfSk7XG4gICAgICByZXMuanNvbihuZXdfRGF0YSlcbiAgICAgIFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICBsZXQge2luc2VydElkfTphbnkgPSBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi5pbnNlcnRDTElFTlQocmVxLmJvZHkpXG4gICAgICByZXMuanNvbihpbnNlcnRJZClcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFVUJzpcbiAgICAgIGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLnVwZGF0ZU1lc3NhZ2VzKHJlcS5ib2R5LCByZXEuYm9keS5pZClcbiAgICAgIHJlcy5zZW5kKDIwMClcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnREVMRVRFJzpcbiAgICAgIGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmRlbGV0ZU1lc3NhZ2VzKHJlcS5ib2R5LmlkKVxuICAgICAgcmVzLnNlbmQocmVxLm1ldGhvZClcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcblxuICAgICAgcmVzLnNlbmQoKVxuICAgICAgYnJlYWs7XG4gIH1cbn0pXG5cbmFwcC5hbGwoJy9udXRyaWVudG1hcC9pbnN0aXR1dGlvbi86aWQnLCBhc3luYyAocmVxLCByZXMsIGVycm9yKSA9PiB7XG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICBjb25zdCBuZXdfRGF0YSA9IGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmFsbE1lc3NhZ2VzKClcbiAgICAgIG5ld19EYXRhLm1hcChpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgIH0pO1xuICAgICAgcmVzLmpzb24obmV3X0RhdGEpXG4gICAgICBcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgcmVxLmJvZHkuY2xpZW50X0lkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpXG5cbiAgICAgIC8vIGxldCB7aW5zZXJ0SWR9OmFueSA9IGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmluc2VydEluc3RpdHV0aW9uKHJlcS5ib2R5KVxuICAgICAgLy8gY29uc29sZS5sb2coaW5zZXJ0SWQpXG4gICAgICByZXMuc2VuZChyZXEubWV0aG9kKVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQVVQnOlxuICAgICAgYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24udXBkYXRlTWVzc2FnZXMocmVxLmJvZHksIHJlcS5ib2R5LmlkKVxuICAgICAgcmVzLnNlbmQoMjAwKVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdERUxFVEUnOlxuICAgICAgYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24uZGVsZXRlTWVzc2FnZXMocmVxLmJvZHkuaWQpXG4gICAgICByZXMuc2VuZChyZXEubWV0aG9kKVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuXG4gICAgICByZXMuc2VuZCgpXG4gICAgICBicmVhaztcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgYXBwXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9pbmRleFwiO1xuXG5cbmNvbnN0IGFsbE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gTnV0cmllbnRtYXAubGlmZXN0YWdlcmVmZXJlbmNlJyk7XG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuY29uc3QgZGVsZXRlTWVzc2FnZXM9IGFzeW5jKGlkOnN0cmluZyk9PlF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsW2lkXSk7XG5jb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyh2YWx1ZXMgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuY2xpZW50IFNFVCA/JyAsdmFsdWVzKTtcbmNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmModmFsdWVzIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JyAsdmFsdWVzKTtcblxuY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDphbnksaWQ6YW55KSA9PlF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCxpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFsbE1lc3NhZ2VzLFxuICAgIC8vIHNpbmdsZUNoaXJwLFxuICAgIGRlbGV0ZU1lc3NhZ2VzLFxuICAgIGluc2VydENMSUVOVCxcbiAgICB1cGRhdGVNZXNzYWdlcyxcbiAgICBpbnNlcnRJbnN0aXR1dGlvblxuICAgIC8vIGFsbFVzZXJzLFxuICAgIC8vIGluc2VydFVzZXJzLFxuICAgIC8vIGluc2VydFBoeXNpY2FsXG4gICAgXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBOdXRyaWVudG1hcCBmcm9tICcuL2RiL251dHJpZW50bWFwJztcbmltcG9ydCAqIGFzIGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShOdXRyaWVudG1hcClcblxuLy8gYXBwLnBvc3QoJy9wb3N0JywgYXN5bmMgKHJlcSxyZXMpID0+e1xuLy8gICAgIGxldCBmaXJzdGRhdGE9IHJlcS5ib2R5WzBdXG5cbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm5hbC51c2RhLmdvdi9mZGMvdjEvZm9vZHMvc2VhcmNoP3F1ZXJ5PSR7Zmlyc3RkYXRhfSZwYWdlU2l6ZT0xMSZhcGlfa2V5PXR6OEZpa3hGa1NmWTdWNXZwU0NoTWVxZ3h0aG9SOUlMY3ZMdEEwWWFgKVxuLy8gICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCBkYXRhLmpzb24oKVxuXG4vLyAgICAgaXRlbS5mb29kc1swXS5mb29kTnV0cmllbnRzLm1hcCgoaTphbnkpPT57Y29uc29sZS5sb2coaSl9KVxuXG4vLyAgICAgcmVzLnNlbmQoaXRlbSlcbi8vIH0pXG5cbi8vIGFwcC51c2UoJy8nLCBhc3luYyAocmVxLHJlcyk9Pntcbi8vICAgICBsZXQgYnJhbmROYW1lPSAnTWNEb3VibGUnXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5uYWwudXNkYS5nb3YvZmRjL3YxL2Zvb2RzL3NlYXJjaD9xdWVyeT0ke2JyYW5kTmFtZX0mcGFnZVNpemU9MTEmYXBpX2tleT10ejhGaWt4RmtTZlk3VjV2cFNDaE1lcWd4dGhvUjlJTGN2THRBMFlhYClcbi8vICAgICBjb25zdCByZXBseT1hd2FpdCBkYXRhLmpzb24oKTtcbi8vICAgY29uc29sZS5sb2cocmVxLmhlYWRlcnMpXG4vLyAgICAgcmVwbHkuZm9vZHMubWFwKChpOmFueSk9Pntcbi8vICAgICAgICAgcmVzLmpzb24oe2ZkYzppLmZkY0lkLGRlc2NyaXB0aW9uOmkuZGVzY3JpcHRpb24sZm9vZE51dHJpZW50czppLmZvb2ROdXRyaWVudHN9KVxuXG4vLyAgICAgfSlcbi8vIH0pXG5cbmFwcC5nZXQoJy8nLChyZXEscmVzKT0+e1xuICAgIHJlcy5zZW5kKCdoZWxsbycpXG59KVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuYXBwLmxpc3Rlbig0MDAwKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==