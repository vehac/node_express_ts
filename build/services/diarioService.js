"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addElement = exports.getElementsNotSensitive = exports.findById = exports.getElements = void 0;
const diario_json_1 = __importDefault(require("./diario.json"));
const diario = diario_json_1.default;
const getElements = () => diario;
exports.getElements = getElements;
const findById = (id) => {
    const elemento = diario.find(d => d.id === id);
    if (elemento !== null && elemento !== undefined) {
        const { comment } = elemento, restOfDiario = __rest(elemento, ["comment"]);
        return restOfDiario;
    }
    return undefined;
};
exports.findById = findById;
const getElementsNotSensitive = () => {
    return diario.map(({ id, emotion, visibility, date }) => {
        return {
            id, emotion, visibility, date
        };
    });
};
exports.getElementsNotSensitive = getElementsNotSensitive;
const addElement = (newElementoDiario) => {
    const newDiario = Object.assign({ id: Math.max(...diario.map(d => d.id)) + 1 }, newElementoDiario);
    diario.push(newDiario);
    return newDiario;
};
exports.addElement = addElement;
