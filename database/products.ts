import { EntitySchema, IEntity } from "./entity";

export interface IProduct extends IEntity {
  name: string;
  price: number;
}

export const ProductSchema: EntitySchema<IProduct> = {
  name: String,
  price: Number,
};
