import * as mongoose from "mongoose";
import * as products from "./products";
import * as users from "./users";

import RepositoryClass from "./repository";

// mongod --dbpath="c:\data\db" --logpath="c:\data\db\log.txt" --install
export type EntitySchema<T> = {
  [P in keyof T]: any;
};

interface IDatabaseContext {
  readonly Users: Utils.IRepository<users.IUser>;
  readonly Products: Utils.IRepository<products.IProduct>;
}
(mongoose as any).Promise = global.Promise;

mongoose.connect(`mongodb://localhost:27017/portalDb`);

const context: IDatabaseContext = {
  Products: new RepositoryClass("Productsb", products.ProductSchema),
  Users: new RepositoryClass("Usersa", users.UserSchema),
};

export default function createCollections(): IDatabaseContext {
  return context;
}
