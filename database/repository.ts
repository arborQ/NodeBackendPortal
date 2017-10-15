import { Document, Model, model, Schema, SchemaDefinition } from "mongoose";
import { IEntity } from "./entity";
export class RepositoryClass<T> {
  private model: Model<any>;
  constructor(name: string, dbCollection: T) {
    this.model = model(name, new Schema(dbCollection as any));
  }

  find(predicate: (entity) => boolean): Promise<T[]> {
    return new Promise<T[]>((resolve) => {
      return this.model.find();
    });
  }
}
