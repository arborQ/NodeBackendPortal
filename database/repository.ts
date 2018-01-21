import { Document, Model, model, Schema, SchemaDefinition } from "mongoose";
import { IEntity } from "./entity";

export default class RepositoryClass<T> implements Utils.IRepository<T> {

  private model: Model<any>;
  constructor(name: string, private dbCollection: SchemaDefinition) {
    this.model = model(name, new Schema(dbCollection));
  }

  get schema() { console.log("get schema", this.dbCollection); return this.dbCollection; }

  add(model: T): Promise<T> {
    return new Promise<T>((resolve) => {
      this.model.collection.insert(model, () => {
        resolve(model);
      });
    }); 
  }

  find(predicate: (entity) => boolean = (entity) => true): Promise<T[]> {
    return new Promise<T[]>((resolve) => {
      resolve(this.model.find());
    });
  }

  findById(id: number): Promise<T> {
    throw new Error("Method not implemented.");
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
