"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const router_1 = __importDefault(require("./routes/router"));
// const nombre = "José";
// console.log(`Mi nombre es ${ nombre }`);
const server = new server_1.default();
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`Server running on port ${server.port}`);
});
