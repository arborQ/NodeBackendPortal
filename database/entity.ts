import { Schema, SchemaDefinition } from "mongoose";

export interface IEntity {
  _id?: number;
}

export type EntitySchema<T> = {
  [P in keyof T]: any;
};
