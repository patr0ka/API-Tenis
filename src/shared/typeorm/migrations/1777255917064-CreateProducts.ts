import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProducts1777255917064 implements MigrationInterface {
    name = 'CreateProducts1777255917064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tenis" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying NOT NULL, "size" integer NOT NULL, "color" character varying NOT NULL, "material" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c3c96cb1142f2e1e77d67a41dcb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tenis"`);
    }

}
