import { IRepository } from "bx-entities";

interface IBaseIndexControllerOptions<O> {
    repository: IRepository<O>;
    path?: string;
    method?: string;
}

export default abstract class IndexBaseControllerAction<I, O> {
    defaultOptions: Partial<IBaseIndexControllerOptions<O>> = {
        method: "GET",
        path: "",
    };

    constructor(private options: IBaseIndexControllerOptions<O>) { }

    protected get controllerOptions(): IBaseIndexControllerOptions<O> {
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

    handler(input: I): Promise<{ data: O[], schema: any }> {
        return new Promise((resolve) => {
            const schema = this.getSchema(this.controllerOptions.repository.schema);

            this.controllerOptions.repository.find().then((data) => {
                resolve({ data, schema });
            });
        });
    }
}
