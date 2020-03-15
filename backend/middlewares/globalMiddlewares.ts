import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import { useInflection } from 'sequelize/types';

export default (app) => {
    const { NODE_ENV } = process.env;
    app
        .use(bodyParser.json())
        .use(passport.initialize())
        .use(passport.session())
        .use(cors());
        if(NODE_ENV == 'development') {
            app.use(morgan('dev'));
        }
}