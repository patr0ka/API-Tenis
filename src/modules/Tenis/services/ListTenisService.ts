import { AppDataSource } from "../../../shared/typeorm/data-source";
import Tenis from "../../../shared/typeorm/entities/tenis";

export default class ListTenisService {
    public async execute(): Promise<Tenis[]> {
        const tenisRepository = AppDataSource.getRepository(Tenis);
        return await tenisRepository.find();
    }
}