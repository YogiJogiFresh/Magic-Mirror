import mongoose from "mongoose"

export interface IUser extends Document {
    _id: string,
    name: string,
    admin: boolean
}

export const UserSchema = new mongoose.Schema(
    {
        _id: String,
        name: String,
        admin: Boolean
    },
    { collection: 'UserCollection'}
)

const User = mongoose.model<IUser>('User', UserSchema)

export default User;