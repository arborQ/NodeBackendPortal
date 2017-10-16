import { Document, Model, model, Schema, SchemaDefinition } from "mongoose";
import { IEntity } from "./entity";

export interface IRepository<T> {
  find(): Promise<T[]>;
  insert(model: T): Promise<T>;
}

export class RepositoryClass<T> implements IRepository<T> {
  private model: Model<any>;
  constructor(name: string, dbCollection: T) {
    this.model = model(name, new Schema(dbCollection as any));
  }

  find(predicate: (entity) => boolean = (entity) => true): Promise<T[]> {
    return new Promise<T[]>((resolve) => {
      resolve(this.model.find());
    });
  }

  insert(model: T): Promise<T> {
    const newModel = new this.model(model);

    return new Promise<T>((resolve) => {
      newModel.save((err, savedModel) => {
        resolve(savedModel);
      });
    });
  }
}
