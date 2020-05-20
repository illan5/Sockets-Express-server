import { Socket } from 'socket.io';
import socketIO from 'socket.io';




export const desconectar = ( cliente: Socket ) => {
    cliente.on('disconnect', () => {
        console.log('Client disconnected');
    });
}

// Escuchar mensajes
export const mensaje = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('mensaje', ( payload: { de: string, cuerpo: string } ) => {

        console.log('Received message', payload );
        io.emit('mensaje-nuevo', payload );

    });
}

// Configurar usuario
export const configurarUsuario = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('configurar-usuario', ( payload: { nombre: string }, callback: Function ) => {

        console.log('Configurando usuario', payload.nombre );
        callback({
            ok: true,
            mensaje: `Usuario ${ payload.nombre }, configurado`
        });
    });
}