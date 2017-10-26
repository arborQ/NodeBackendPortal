declare namespace Utils {
    export interface IPreAction {
        action: () => Promise<boolean>;
    }

    export interface IRepository<T> {
        readonly schema: any;
        find(): Promise<T[]>;
        findById(id: number): Promise<T>;
        insert(model: T): Promise<T>;
    }

    export interface IBaseIndexControllerOptions<O> {
        repository: IRepository<O>;
        path?: string;
        method?: string;
    }

    export interface IListResponse<O> {
        data: O[];
        schema: any;
    }

    export interface IDetailsResponse<O> {
        data: O;
        schema: any;
    }

    export interface IDictionary<O> {
        [index: string]: O;
    }
}
