import AppError from "../../../shared/errors/AppError";
import { AppDataSource } from "../../../shared/typeorm/data-source";
import Tenis from "../../../shared/typeorm/entities/tenis";
interface IRequest {
    id: string;
}
export default class ShowTenisService {
    public async execute({ id }: IRequest): Promise<Tenis> {
        const tenisRepository = AppDataSource.getRepository(Tenis);
        const tenis = await tenisRepository.findOneBy({ id });
        if (!tenis) {
            throw new AppError("Tenis not found.");
        }
        return tenis;
    }
}