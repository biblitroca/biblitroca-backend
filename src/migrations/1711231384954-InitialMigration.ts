import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1711231384954 implements MigrationInterface {
    name = 'InitialMigration1711231384954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "author" character varying(50) NOT NULL, "type" character varying(6) NOT NULL, "price" integer NOT NULL, "userId" integer, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_bb8627d137a861e2d5dc8d1eb20" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_bb8627d137a861e2d5dc8d1eb20"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
