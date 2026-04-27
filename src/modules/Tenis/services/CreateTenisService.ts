import AppError from "../../../shared/errors/AppError";
import { AppDataSource } from "../../../shared/typeorm/data-source";
import Tenis from "../../../shared/typeorm/entities/tenis";

interface IRequest {
    name: string;
    brand: string;
    size: number;
    color: string;
    material: string;
    price: number;
}

export default class CreateTenisService {
    public async execute({ name, brand, size, color, material, price }: IRequest):
        Promise<Tenis> {
        const tenisRepository = AppDataSource.getRepository(Tenis);
        const tenis = tenisRepository.create({
            name,
            brand,
            size,
            color,
            material,
            price,
        });
        await tenisRepository.save(tenis);
        return tenis;
    }
}