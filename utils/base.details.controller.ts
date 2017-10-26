import { IRepository } from "bx-entities";
import BaseControllerAction from "./base.index.controller";

export default abstract class BaseDetailsControllerAction<I extends { id: number }, O>
    extends BaseControllerAction<I, O, Utils.IDetailsResponse<O>> {

    constructor(options: Utils.IBaseIndexControllerOptions<O>) {
        super(options);
     }

    handler(input: I): Promise<Utils.IDetailsResponse<O>> {
        return new Promise((resolve) => {
            const schema = this.getSchema(this.controllerOptions.repository.schema);

            this.controllerOptions.repository.findById(input.id).then((data) => {
                resolve({ data, schema });
            });
        });
    }
}
