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
    var _a, new_Data;
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
            case 1: return [4 /*yield*/, query_clients_1.default.allMessages()];
            case 2:
                new_Data = _b.sent();
                new_Data.map(function (i) {
                    console.log(i);
                });
                res.json(new_Data);
                return [3 /*break*/, 10];
            case 3: return [4 /*yield*/, query_clients_1.default.insertMessages(req.body)];
            case 4:
                _b.sent();
                res.send(req.method);
                return [3 /*break*/, 10];
            case 5: return [4 /*yield*/, query_clients_1.default.updateMessages(req.body, req.body.id)];
            case 6:
                _b.sent();
                res.send(200);
                return [3 /*break*/, 10];
            case 7: return [4 /*yield*/, query_clients_1.default.deleteMessages(req.body.id)];
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
    return [2 /*return*/, (0, index_1.Query)('SELECT * FROM Nutrientmap.lifestagereference')];
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
exports["default"] = query_clients_1.default;


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
var clients_1 = __webpack_require__(/*! ./db/clients */ "./mainDevFolder/server/db/clients/index.ts");
var app = express();
app.use(cors());
app.use(express.json());
app.use(clients_1.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFTCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxVQUFDLEdBQUcsRUFBQyxHQUFHO0lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQWFGLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy8uL21haW5EZXZGb2xkZXIvc2VydmVyL2RiL2NsaWVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy8uL21haW5EZXZGb2xkZXIvc2VydmVyL2RiL2NsaWVudHMvcXVlcnlfY2xpZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzLy4vbWFpbkRldkZvbGRlci9zZXJ2ZXIvZGIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJteXNxbFwiIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy8uL21haW5EZXZGb2xkZXIvc2VydmVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tICdhdXRvcHJlZml4ZXInXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgZGF0YWJhc2VfRnVuY3Rpb24gZnJvbSAnLi9xdWVyeV9jbGllbnRzJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuYXBwLmFsbCgnL2NsaWVudF9zdWl0ZScsIGFzeW5jIChyZXEsIHJlcywgZXJyb3IpID0+IHtcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIGNvbnN0IG5ld19EYXRhID0gYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24uYWxsTWVzc2FnZXMoKVxuICAgICAgbmV3X0RhdGEubWFwKGkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgICAgfSk7XG4gICAgICByZXMuanNvbihuZXdfRGF0YSlcbiAgICAgIFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUE9TVCc6XG5cbiAgICAgIGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmluc2VydE1lc3NhZ2VzKHJlcS5ib2R5KVxuICAgICAgcmVzLnNlbmQocmVxLm1ldGhvZClcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFVUJzpcbiAgICAgIGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLnVwZGF0ZU1lc3NhZ2VzKHJlcS5ib2R5LCByZXEuYm9keS5pZClcbiAgICAgIHJlcy5zZW5kKDIwMClcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnREVMRVRFJzpcbiAgICAgIGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmRlbGV0ZU1lc3NhZ2VzKHJlcS5ib2R5LmlkKVxuICAgICAgcmVzLnNlbmQocmVxLm1ldGhvZClcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcblxuICAgICAgcmVzLnNlbmQoKVxuICAgICAgYnJlYWs7XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFwcFxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcblxuXG5jb25zdCBhbGxNZXNzYWdlcyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIE51dHJpZW50bWFwLmxpZmVzdGFnZXJlZmVyZW5jZScpO1xuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbmNvbnN0IGRlbGV0ZU1lc3NhZ2VzPSBhc3luYyhpZDpzdHJpbmcpPT5RdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuY29uc3QgaW5zZXJ0TWVzc2FnZXMgPSBhc3luYyh2YWx1ZXMgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY29udGFjdCBTRVQgPycgLHZhbHVlcyk7XG5jb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OmFueSxpZDphbnkpID0+UXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYWxsTWVzc2FnZXMsXG4gICAgLy8gc2luZ2xlQ2hpcnAsXG4gICAgZGVsZXRlTWVzc2FnZXMsXG4gICAgaW5zZXJ0TWVzc2FnZXMsXG4gICAgdXBkYXRlTWVzc2FnZXMsXG4gICAgLy8gYWxsVXNlcnMsXG4gICAgLy8gaW5zZXJ0VXNlcnMsXG4gICAgLy8gaW5zZXJ0UGh5c2ljYWxcbiAgICBcbn0iLCJpbXBvcnQgKiBhcyBteXNxbCBmcm9tICdteXNxbCc7XG5pbXBvcnQgZGF0YWJhc2VfRnVuY3Rpb24gZnJvbSAnLi9jbGllbnRzL3F1ZXJ5X2NsaWVudHMnXG5cblxuXG5cbmNvbnN0IG15c3FsQWNjZXNzID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gICAgaG9zdDonMTI3LjAuMC4xJyxcbiAgICBwb3J0OjMzMDYsXG4gICAgdXNlcjonbWUnLFxuICAgIHBhc3N3b3JkOidwYXNzd29yZCcsXG4gICAgZGF0YWJhc2U6J051dHJpZW50bWFwJ1xufSlcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gKHF1ZXJ5OnN0cmluZyx2YWx1ZXM/OkFycmF5PHN0cmluZ3xudW1iZXI+KT0+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgIG15c3FsQWNjZXNzLnF1ZXJ5KHF1ZXJ5LHZhbHVlcywoZXJyLHJlc3VsdHMpID0+e1xuICAgICAgICAgICAgaWYoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdHMpO1xuXG5cbiAgICAgICAgfSlcbiAgICB9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YWJhc2VfRnVuY3Rpb247IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBjbGllbnREYXRlIGZyb20gJy4vZGIvY2xpZW50cyc7XG5pbXBvcnQgKiBhcyBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29ycygpKVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC51c2UoY2xpZW50RGF0ZSlcblxuLy8gYXBwLnBvc3QoJy9wb3N0JywgYXN5bmMgKHJlcSxyZXMpID0+e1xuLy8gICAgIGxldCBmaXJzdGRhdGE9IHJlcS5ib2R5WzBdXG5cbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm5hbC51c2RhLmdvdi9mZGMvdjEvZm9vZHMvc2VhcmNoP3F1ZXJ5PSR7Zmlyc3RkYXRhfSZwYWdlU2l6ZT0xMSZhcGlfa2V5PXR6OEZpa3hGa1NmWTdWNXZwU0NoTWVxZ3h0aG9SOUlMY3ZMdEEwWWFgKVxuLy8gICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCBkYXRhLmpzb24oKVxuXG4vLyAgICAgaXRlbS5mb29kc1swXS5mb29kTnV0cmllbnRzLm1hcCgoaTphbnkpPT57Y29uc29sZS5sb2coaSl9KVxuXG4vLyAgICAgcmVzLnNlbmQoaXRlbSlcbi8vIH0pXG5cbi8vIGFwcC51c2UoJy8nLCBhc3luYyAocmVxLHJlcyk9Pntcbi8vICAgICBsZXQgYnJhbmROYW1lPSAnTWNEb3VibGUnXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5uYWwudXNkYS5nb3YvZmRjL3YxL2Zvb2RzL3NlYXJjaD9xdWVyeT0ke2JyYW5kTmFtZX0mcGFnZVNpemU9MTEmYXBpX2tleT10ejhGaWt4RmtTZlk3VjV2cFNDaE1lcWd4dGhvUjlJTGN2THRBMFlhYClcbi8vICAgICBjb25zdCByZXBseT1hd2FpdCBkYXRhLmpzb24oKTtcbi8vICAgY29uc29sZS5sb2cocmVxLmhlYWRlcnMpXG4vLyAgICAgcmVwbHkuZm9vZHMubWFwKChpOmFueSk9Pntcbi8vICAgICAgICAgcmVzLmpzb24oe2ZkYzppLmZkY0lkLGRlc2NyaXB0aW9uOmkuZGVzY3JpcHRpb24sZm9vZE51dHJpZW50czppLmZvb2ROdXRyaWVudHN9KVxuXG4vLyAgICAgfSlcbi8vIH0pXG5cbmFwcC5nZXQoJy8nLChyZXEscmVzKT0+e1xuICAgIHJlcy5zZW5kKCdoZWxsbycpXG59KVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuYXBwLmxpc3Rlbig0MDAwKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==