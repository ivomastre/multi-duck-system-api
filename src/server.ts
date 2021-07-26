import http from 'http';

import App from './app';
import { PORT } from './config/env';

const server = http.createServer(new App().express);

server.listen(PORT, async () => {
  console.log('Hally has started 🐒');
});

export default server;
