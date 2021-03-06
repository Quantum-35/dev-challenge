import express from 'express';
import dotenv from 'dotenv';

import globalMiddleware from '../middlewares/globalMiddlewares';
import '../middlewares/passports';
import routes from './routes';
import db from './sequelize/models/index';

// interface

dotenv.config();
const app = express();
const { sequelize } = db;
const port = process.env.PORT || 3002;

// middlewares
globalMiddleware(app);
app.use('/api', routes);
app.use((req, res) => {
  res.status(404).send({
    success: false,
    message: "Page not found"
  })
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    const message = `Database Connected Successfully.Server running at port ${port} in ${process.env.NODE_ENV} mode`;
    return console.log(message);
});
})