import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1662853476263 implements MigrationInterface {
    name = 'CreateUser1662853476263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "uid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "email" character varying(100) NOT NULL,
                "password" character varying(100) NOT NULL,
                "nickname" character varying(30) NOT NULL,
                CONSTRAINT "PK_df955cae05f17b2bcf5045cc021" PRIMARY KEY ("uid")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
