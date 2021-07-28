import Router from "express-promise-router";
import cluesRoutes from './clues.routes';

const routes = Router();
routes.use(cluesRoutes)

export default routes;
