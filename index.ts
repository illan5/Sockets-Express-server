
import Server from './classes/server';
import { SERVER_PORT } from './global/environment';

// const nombre = "José";
// console.log(`Mi nombre es ${ nombre }`);

const server = new Server();

server.start( () => {
    console.log(`Server running on port ${ SERVER_PORT }`)
});