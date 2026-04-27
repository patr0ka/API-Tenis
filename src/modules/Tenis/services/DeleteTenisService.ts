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
        await tenisRepository.remove(tenis);
    }
}