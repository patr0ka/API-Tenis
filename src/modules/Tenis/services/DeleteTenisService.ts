import AppError from "../../../shared/errors/AppError";
import { AppDataSource } from "../../../shared/typeorm/data-source";
import Tenis from "../../../shared/typeorm/entities/tenis";

interface IRequest {
    id: string;
}

export default class DeleteTenisService {
    public async execute({ id }: IRequest): Promise<void> {
        const tenisRepository = AppDataSource.getRepository(Tenis);
        const tenis = await tenisRepository.findOneBy({ id });
        if (!tenis) {
            throw new AppError("Tenis not found.");
        }
        
        // Se quantidade é 1, deleta o registro
        if (tenis.quantity === 1) {
            await tenisRepository.remove(tenis);
        } else {
            // Se quantidade é maior que 1, subtrai 1
            tenis.quantity -= 1;
            await tenisRepository.save(tenis);
        }
    }
}