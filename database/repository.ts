import { Document, Model, model, Schema, SchemaDefinition } from "mongoose";
import { IEntity } from "./entity";

export interface IRepository<T> {
  readonly schema: any;
  find(): Promise<T[]>;
  insert(model: T): Promise<T>;
}

export class RepositoryClass<T> implements IRepository<T> {
  private model: Model<any>;
  constructor(name: string, private dbCollection: T) {
    this.model = model(name, new Schema(dbCollection as any));
  }

  get schema() { console.log("get schema", this.dbCollection);  return this.dbCollection; }

  find(predicate: (entity) => boolean = (entity) => true): Promise<T[]> {
    return new Promise<T[]>((resolve) => {
      resolve(this.model.find());
    });
  }

  insert(saveModel: T): Promise<T> {
    const newModel = new this.model(saveModel);

    return new Promise<T>((resolve) => {
      newModel.save((err, savedModel) => {
        resolve(savedModel);
      });
    });
  }
}
