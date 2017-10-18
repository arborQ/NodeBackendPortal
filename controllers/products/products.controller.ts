import database from "bx-database";
import { IProduct, IRepository } from "bx-entities";
import { IndexBaseControllerAction } from "bx-utils";

export default class ProductController extends IndexBaseControllerAction<IProduct, any> {
    constructor() {
        super({ repository: database().Products });
    }
}
