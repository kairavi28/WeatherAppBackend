import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import weatherRoutes from './weatherRoutes';
import { describe } from 'node:test';
import Messenger from './createMessage';

const app = express();
const PORT = 3000;
const userName: string = 'Kairavi641';
const userPass: string = 'Pizza098';

const getConnectionString = (user: string, pass: string) : string => {
   return `mongodb+srv://${user}:${pass}@cluster0.dqce4d5.mongodb.net/WeatherApp`;
}
// instance of class and get message
let messages = new Messenger(PORT);

let database = getConnectionString(userName, userPass);
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', weatherRoutes);

app.get('/', (req,res) => {
  res.send(messages.messagePrint());
});

// Connect to MongoDB and start the server
mongoose.connect(database).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});
