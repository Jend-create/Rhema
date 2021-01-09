import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoute from './routes/userRoute.js';

const dbLink = 'mongodb+srv://capstone:BvEqcoYwbwgIIyAv@cluster0.z7fa8.mongodb.net/capstonedb'
const PORT = process.env.PORT||5000;

mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use(userRoute);

app.get('/', (req, res) =>{
  res.status(200).send('./build') })
app.get('/build', (req, res) =>{
    res.status(200).send(`http://localhost: ${5000}`)})

