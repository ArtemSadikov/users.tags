import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTag1662854767754 implements MigrationInterface {
    name = 'CreateTag1662854767754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "tag" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "creator" uuid NOT NULL,
                "name" character varying(40) NOT NULL,
                "sort_order" integer NOT NULL DEFAULT '0',
                CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
