import { Document, ObjectId, Schema } from 'mongoose';
export interface IProfile extends Document {
    firstName?: string;
    lastName?: string;
    age?: number,
    email: string,
    weight?: number;
    height?:number,
    // TODO: sessionIds: a list of foreign keys to sessions created by the user
    userId: Schema.Types.ObjectId;
}