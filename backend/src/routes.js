import { Router } from 'express';

import authMiddleware from './app/middlewares/Auth';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

export default routes;
