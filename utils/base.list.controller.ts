import { IRepository } from "bx-entities";
import BaseControllerAction from "./base.index.controller";

export default abstract class BaseListControllerAction<I, O>
  extends BaseControllerAction<I, O, Utils.IListResponse<O>> {

  constructor(options: Utils.IBaseIndexControllerOptions<O>) {
    super(options);
  }

  handler(input: I): Promise<Utils.IListResponse<O>> {
    return new Promise((resolve) => {
      const schema = this.getSchema(this.controllerOptions.repository.schema);

      this.controllerOptions.repository.find().then((data) => {
        resolve({ data, schema });
      });
    });
  }

  // get childActions(): Utils.IDictionary<BaseControllerAction<any, any, any>> {
  //   return {};
  // }
}
