import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.ts$/,
  },
  entities: [Post],
  dbName: "postgres",
  type: "postgresql",
  user: "postgres",
  password: "docker",
  port: 5432,
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
