import { connect, connection, model, Schema } from "mongoose";
import * as products from "./products";
import * as users from "./users";

import { RepositoryClass } from "./repository";

connect(`mongodb://localhost:8011/portalDb`);

export type EntitySchema<T> = {
  [P in keyof T]: any;
};

interface IDatabaseContext {
  readonly Users: RepositoryClass<users.IUser>;
  readonly Products: RepositoryClass<products.IProduct>;
}

export default function createCollections(): Promise<IDatabaseContext> {
  const db = connection;
  db.on("error", console.error.bind(console, "connection error:"));
  return new Promise<IDatabaseContext>((resolve) => {
    db.once("open", () => {

      const context: IDatabaseContext = {
        Products: new RepositoryClass("Products", products.ProductSchema),
        Users: new RepositoryClass("Users", users.UserSchema),
      };

      resolve(context);
    });
  });
}
