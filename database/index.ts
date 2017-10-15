import * as mongoose from "mongoose";
import * as products from "./products";
import * as users from "./users";

import { RepositoryClass } from "./repository";

export type EntitySchema<T> = {
  [P in keyof T]: any;
};

interface IDatabaseContext {
  readonly Users: RepositoryClass<users.IUser>;
  readonly Products: RepositoryClass<products.IProduct>;
}
(mongoose as any).Promise = global.Promise;

mongoose.connect(`mongodb://localhost:8011/portalDb`);
console.log("connect");

export default function createCollections(): Promise<IDatabaseContext> {
  console.log("createCollections");
  const context: IDatabaseContext = {
    Products: new RepositoryClass("Products", products.ProductSchema),
    Users: new RepositoryClass("Users", users.UserSchema),
  };

  return Promise.resolve(context);
}
