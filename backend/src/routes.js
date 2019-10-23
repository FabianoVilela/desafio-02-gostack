import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json(200);
});

export default routes;

import User from './app/models/User';
