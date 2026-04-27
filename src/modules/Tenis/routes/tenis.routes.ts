import { Router } from 'express';
import TenisController from '../controllers/TenisController';

const tenisRouter = Router();
const tenisController = new TenisController();

tenisRouter.get('/', async (req, res, next) => {
    try {
        await tenisController.index(req, res, next);
    } catch (err) {
        next(err);
    }
});

tenisRouter.get('/:id', async (req, res, next) => {
    try {
        await tenisController.show(req, res, next);
    } catch (err) {
        next(err);
    }
});

tenisRouter.post('/', async (req, res, next) => {
    try {
        await tenisController.create(req, res, next);
    } catch (err) {
        next(err);
    }
});

tenisRouter.put('/:id', async (req, res, next) => {
    try {
        await tenisController.update(req, res, next);
    } catch (err) {
        next(err);
    }
});

tenisRouter.delete('/:id', async (req, res, next) => {
    try {
        await tenisController.delete(req, res, next);
    } catch (err) {
        next(err);
    }
});

export default tenisRouter;