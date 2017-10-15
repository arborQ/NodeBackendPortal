import { EntitySchema, IEntity } from "./entity";

export interface IUser extends IEntity {
    firstName: string;
    lastName: string;
}

export const UserSchema: EntitySchema<IUser> = {
    firstName: String,
    lastName: String,
};
