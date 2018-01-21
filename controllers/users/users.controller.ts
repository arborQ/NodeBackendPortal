import database from "bx-database";
import { IRepository, IUser } from "bx-entities";
export function AddUser(model: any): void {
    database().Users.insert(model);
}

export function GetAllUsers(): Promise<any[]> {
    return database().Users.find();
}
