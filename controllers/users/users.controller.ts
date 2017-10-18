import database from "bx-database";
import { IRepository, IUser } from "bx-entities";
import { IndexBaseControllerAction } from "bx-utils";

export default class UserController extends IndexBaseControllerAction<IUser, any> {
    constructor() {
        super({ repository: database().Users });
    }
}
