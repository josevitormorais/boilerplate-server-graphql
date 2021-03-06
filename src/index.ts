import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import config from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(config);
  await orm.getMigrator().up();
  const posts = orm.em.create(Post, { title: "My fist post" });
  await orm.em.persistAndFlush(posts);
  const getPost = await orm.em.find(Post, {});

  console.log(getPost);
};

main().catch((err) => console.log(err));
