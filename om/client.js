import { createClient } from 'redis';

const client = createClient({
    password: process.env.REDIS_PW ,
    socket: {
        host: process.env.REDIS_HOST,
        port: 10571
    }
});

client.connect();

export default client;