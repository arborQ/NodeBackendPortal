import { EntitySchema, IEntity } from "./entity";
import Repository from "./repository";

export interface IUser extends IEntity {
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
}

export const UserSchema: EntitySchema<IUser> = {
    email: String,
    firstName: String,
    isActive: Boolean,
    lastName: String,
};

export const UserRepository = new Repository("Users", UserSchema);
