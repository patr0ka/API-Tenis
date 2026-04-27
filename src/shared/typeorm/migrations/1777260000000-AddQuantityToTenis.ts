import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddQuantityToTenis1777260000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "tenis",
            new TableColumn({
                name: "quantity",
                type: "int",
                default: 1,
                isNullable: false,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tenis", "quantity");
    }

}
