import database from "../../database";
import { IUser } from "../../database/users";

export default {
    handler: ( request ) => {
        return new Promise<IUser[]>((resolve) => {
            database().then((db) => {
                console.log("resolve");
                db.Users.find().then((users) => {
                    resolve([...users]);
                });
            });
        });
    },
    method: "GET",
    path: "",
};
