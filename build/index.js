"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diario_1 = __importDefault(require("./routes/diario"));
const app = express_1.default();
app.use(express_1.default.json());
const PORT = 8101;
app.get('/', (_req, res) => {
    res.send('Inicio Nodejs - typescript - express');
});
app.use('/api/diario', diario_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
