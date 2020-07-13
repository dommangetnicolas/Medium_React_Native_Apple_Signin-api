import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import router from './routes';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/rnsignin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', router);

app.listen(port);

export default app;
