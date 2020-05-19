import { Socket } from 'socket.io';
import socketIO from 'socket.io';




export const desconectar = ( cliente: Socket ) => {
    cliente.on('disconnect', () => {
        console.log('Client disconnected');
    });
}

// Escuchar mensajes
export const mensaje = ( cliente: Socket ) => {

    cliente.on('mensaje', ( payload: { de:string, cuerpo:string } ) => {

        console.log('Received message', payload );

    });

}