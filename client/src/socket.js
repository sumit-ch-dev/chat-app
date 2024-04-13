import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.NODE_ENV === 'production' ? undefined : 'http://192.168.0.21:3000';

export const socket = io(URL);