import AppError from "../../../shared/errors/AppError";
import { AppDataSource } from "../../../shared/typeorm/data-source";
import Tenis from "../../../shared/typeorm/entities/tenis";

interface IRequest {
    id: string;
    name: string;
    brand: string;
    size: number;
    color: string;
    material: string;
    price: number;
}

export default class UpdateTenisService {
    public async execute({ id, name, brand, size, color, material, price }: IRequest):
        Promise<Tenis> {
        const tenisRepository = AppDataSource.getRepository(Tenis);
        const tenis = await tenisRepository.findOneBy({ id });
        if (!tenis) {
            throw new AppError("Tenis not found.");
        }
        tenis.name = name;
        tenis.brand = brand;
        tenis.size = size;
        tenis.color = color;
        tenis.material = material;
        tenis.price = price;
        await tenisRepository.save(tenis);
        return tenis;
    }
}