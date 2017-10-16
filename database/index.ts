import * as mongoose from "mongoose";
import * as products from "./products";
import * as users from "./users";

import { IRepository, RepositoryClass } from "./repository";

export type EntitySchema<T> = {
  [P in keyof T]: any;
};

interface IDatabaseContext {
  readonly Users: IRepository<users.IUser>;
  readonly Products: IRepository<products.IProduct>;
}
(mongoose as any).Promise = global.Promise;

mongoose.connect(`mongodb://localhost:8011/portalDb`);

const context: IDatabaseContext = {
  Products: new RepositoryClass("Products", products.ProductSchema),
  Users: new RepositoryClass("Users", users.UserSchema),
};

export default function createCollections(): IDatabaseContext {
  return context;
}
