
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response ) => {
    res.json({
        ok: true,
        mensaje: 'GET Working!!'
    });
});

router.post('/mensajes', (req: Request, res: Response ) => {
    res.json({
        ok: true,
        mensaje: 'POST Working!!'
    });
});

export default router;