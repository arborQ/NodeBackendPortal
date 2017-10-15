import database from "../../database";
import { IUser } from "../../database/users";

export default {
    handler: ( request ) => {
        return new Promise<IUser[]>((resolve) => {
            database().then((db) => {
                resolve(db.Users.find((e) => true));
            });
        });
    },
    method: "GET",
    path: "",
};
