
import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();

router.get('/mensajes', (req: Request, res: Response ) => {
    res.json({
        ok: true,
        mensaje: 'GET Working!!'
    });
});

router.post('/mensajes', (req: Request, res: Response ) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const payload = { cuerpo, de };

    const server = Server.instance;
    server.io.emit('mensaje-nuevo', payload);

    res.json({
        ok: true,
        cuerpo,
        de,
        mensaje: 'POST Working!!'
    });
});

router.post('/mensajes/:id', (req: Request, res: Response ) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    const payload = {
        de,
        cuerpo
    }

    const server = Server.instance;

    server.io.in( id ).emit( 'mensaje-privado', payload );

    res.json({
        ok: true,
        cuerpo,
        de,
        id,
        mensaje: 'POST Working!!'
    });
});

export default router;