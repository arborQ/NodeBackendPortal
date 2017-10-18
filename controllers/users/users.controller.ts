import database from "../../database";
import { IUser } from "../../database/users";

function parseSchema(schema: any): any {
    const returnSchema = {};
    // tslint:disable-next-line:forin
    for (const index in schema) {
        const item = schema[index];

        returnSchema[index] = "string";
    }

    return returnSchema;
}

export default {
    handler: (request) => {
        return new Promise<{ data: IUser[], schema: any }>((resolve) => {
            const db = database();
            const user: IUser = {
                email: "arbor@o2.pl",
                firstName: "Lukasz",
                isActive: true,
                lastName: "Wojcik",
             };
            db.Users.find().then((users) => {
            resolve({ data: [...users, user], schema: parseSchema(db.Users.schema) });
            });
        });
    },
    method: "GET",
    path: "",
};
