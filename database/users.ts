import { EntitySchema, IEntity } from "./entity";

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
