import { Request, Response, NextFunction } from 'express';
import CreateTenisService from "../services/CreateTenisService";
import DeleteTenisService from '../services/DeleteTenisService';
import ListTenisService from '../services/ListTenisService';
import ShowTenisService from '../services/ShowTenisService';
import UpdateTenisService from '../services/UpdateTenisService';

export default class TenisController {
    public async index(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void> {
        try {
            const listTenis = new ListTenisService();
            const tenis = await listTenis.execute();
            return response.status(200).json(tenis);
        } catch (err) {
            next(err);
        }
    }

    public async show(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void> {
        try {
            const id = request.params.id as string;
            const showTenis = new ShowTenisService();
            const tenis = await showTenis.execute({ id });
            return response.status(200).json(tenis);
        } catch (err) {
            next(err);
        }
    }

    public async create(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void> {
        try {
            const { name, brand, size, color, material, price } = request.body;
            const createTenis = new CreateTenisService();
            const tenis = await createTenis.execute({
                name,
                brand,
                size,
                color,
                material,
                price,
            });
            return response.status(201).json(tenis);
        } catch (err) {
            next(err);
        }
    }

    public async update(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void> {
        try {
            const id = request.params.id as string;
            const { name, brand, size, color, material, price } = request.body;
            const updateTenis = new UpdateTenisService();
            const tenis = await updateTenis.execute({
                id,
                name,
                brand,
                size,
                color,
                material,
                price,
            });
            return response.status(200).json(tenis);
        } catch (err) {
            next(err);
        }
    }

    public async delete(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void> {
        try {
            const id = request.params.id as string;
            const deleteTenis = new DeleteTenisService();
            await deleteTenis.execute({ id });
            return response.status(204).send();
        } catch (err) {
            next(err);
        }
    }
}
