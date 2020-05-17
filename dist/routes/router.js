"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'GET Working!!'
    });
});
router.post('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'POST Working!!'
    });
});
exports.default = router;
