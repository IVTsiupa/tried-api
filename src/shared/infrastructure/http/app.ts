import fastify from "fastify";
import { usersRoutes } from "../../../modules/users/infrastructure/http/routes";

const server = fastify();

server.register(usersRoutes, { prefix: "/users" });

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
