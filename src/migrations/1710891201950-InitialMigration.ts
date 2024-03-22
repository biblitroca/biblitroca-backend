import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1710891201950 implements MigrationInterface {
    name = 'InitialMigration1710891201950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" ADD "author" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "author"`);
    }

}
