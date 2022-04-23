import { DataSource } from "typeorm";

export const TriedDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "foREVera7x",
  database: "tried",
  entities: ["src/shared/infrastructure/data/typeorm/entities/*.entity.ts"],
  migrations: ["src/shared/infrastructure/data/typeorm/migrations/*.ts"],
});

TriedDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
