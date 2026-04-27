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
    private validateFields(name: string, brand: string, size: number, color: string, material: string, price: number): void {
        // Validar campos obrigatórios
        if (!name || name.trim() === '') {
            throw new AppError("Name is required.");
        }
        if (!brand || brand.trim() === '') {
            throw new AppError("Brand is required.");
        }
        if (!color || color.trim() === '') {
            throw new AppError("Color is required.");
        }
        if (!material || material.trim() === '') {
            throw new AppError("Material is required.");
        }

        // Validar campos numéricos
        if (size === null || size === undefined || isNaN(size)) {
            throw new AppError("Size is required and must be a valid number.");
        }
        if (size <= 0) {
            throw new AppError("Size must be greater than 0.");
        }

        if (price === null || price === undefined || isNaN(price)) {
            throw new AppError("Price is required and must be a valid number.");
        }
        if (price <= 0) {
            throw new AppError("Price must be greater than 0.");
        }
    }

    public async execute({ id, name, brand, size, color, material, price }: IRequest):
        Promise<Tenis> {
        this.validateFields(name, brand, size, color, material, price);

        const tenisRepository = AppDataSource.getRepository(Tenis);
        const tenis = await tenisRepository.findOneBy({ id });
        if (!tenis) {
            throw new AppError("Tenis not found.");
        }
        tenis.name = name.trim();
        tenis.brand = brand.trim();
        tenis.size = size;
        tenis.color = color.trim();
        tenis.material = material.trim();
        tenis.price = price;
        await tenisRepository.save(tenis);
        return tenis;
    }
}