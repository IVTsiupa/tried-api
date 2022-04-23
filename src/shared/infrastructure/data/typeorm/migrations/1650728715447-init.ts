import { MigrationInterface, QueryRunner } from "typeorm";
import { readFile } from "fs/promises";

export class init1650728715447 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const initMigrationQuery = await readFile(
      "src/scripts/init_migration.sql",
      {
        encoding: "utf8",
      },
    );
    await queryRunner.query(initMigrationQuery);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE IF EXISTS users CASCADE");
  }
}
