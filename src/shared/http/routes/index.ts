import { Router } from "express";
import tenisRouter from "../../../modules/Tenis/routes/tenis.routes";

const routes = Router();

routes.use("/tenis", tenisRouter);

export default routes;