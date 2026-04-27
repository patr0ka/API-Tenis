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

    public async execute({ name, brand, size, color, material, price }: IRequest):
        Promise<Tenis> {
        this.validateFields(name, brand, size, color, material, price);

        const tenisRepository = AppDataSource.getRepository(Tenis);
        
        // Procurar por tênis exatamente igual
        const existingTenis = await tenisRepository.findOne({
            where: {
                name: name.trim(),
                brand: brand.trim(),
                size,
                color: color.trim(),
                material: material.trim(),
                price,
            },
        });

        if (existingTenis) {
            // Se encontrou um igual, apenas incrementa a quantidade
            existingTenis.quantity += 1;
            await tenisRepository.save(existingTenis);
            return existingTenis;
        }

        // Se não existe, cria um novo com quantidade 1
        const tenis = tenisRepository.create({
            name: name.trim(),
            brand: brand.trim(),
            size,
            color: color.trim(),
            material: material.trim(),
            price,
            quantity: 1,
        });
        await tenisRepository.save(tenis);
        return tenis;
    }
}