import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNameToTenis1777259301572 implements MigrationInterface {
    name = 'AddNameToTenis1777259301572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tenis" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tenis" DROP COLUMN "name"`);
    }

}
