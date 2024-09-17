import express from 'express'
import routerHotel from './router/hotel.route.js'
import routerRooms from './router/room.route.js';
import cors from 'cors';

const PORT = 3006

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routerHotel);
app.use('/api', routerRooms);

app.listen(PORT, () => console.log(`server start on Port: ${PORT}`));