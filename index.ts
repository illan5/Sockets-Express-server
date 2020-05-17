
import Server from './classes/server';
import router from './routes/router';

// const nombre = "José";
// console.log(`Mi nombre es ${ nombre }`);

const server = new Server();

server.app.use('/', router)

server.start( () => {
    console.log(`Server running on port ${ server.port }`)
});