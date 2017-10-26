import { IRepository } from "bx-entities";
import BaseControllerAction from "./baseController";

export default abstract class IndexBaseControllerAction<I, O, R>
    extends BaseControllerAction<I, O, R> {
    defaultOptions: Partial<Utils.IBaseIndexControllerOptions<O>> = {
        method: "GET",
        path: "",
    };

    constructor(private options: Utils.IBaseIndexControllerOptions<O>) {
        super();
    }

    protected get controllerOptions(): Utils.IBaseIndexControllerOptions<O> {
        return Object.assign({}, this.defaultOptions, this.options);
    }

    get method(): string {
        return this.controllerOptions.method;
    }

    get path(): string {
        return this.controllerOptions.path;
    }

    getSchema(repositorySchema: any) {
        const returnSchema = {};

        // tslint:disable-next-line:forin
        for (const index in repositorySchema) {
            const item = repositorySchema[index];

            returnSchema[index] = "string";
        }

        return returnSchema;
    }

    get childActions(): Utils.IDictionary<BaseControllerAction<any, any, any>> {
        return null;
    }

    abstract handler(input: I): Promise<R>;
}
