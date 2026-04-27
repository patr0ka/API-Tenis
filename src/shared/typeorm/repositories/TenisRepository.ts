import { AppDataSource } from "@shared/typeorm/data-source";
import { Repository } from "typeorm";
import Tenis from "../entities/tenis";

export default class TenisRepository {
    private ormRepository: Repository<Tenis>;
    constructor() {
        this.ormRepository = AppDataSource.getRepository(Tenis);
    }
    public async findByName(name: string): Promise<Tenis | null> {
        const tenis = await this.ormRepository.findOne({
            where: { name },
        });
        return tenis;
    }
}