import database from "bx-database";
import { IRepository, IUser } from "bx-entities";
import { IndexBaseControllerAction, LogDecorator } from "bx-utils";

@LogDecorator("UserController")
export default class UserController extends IndexBaseControllerAction<IUser, any> {
    constructor() {
        super({ repository: database().Users });
    }
}
