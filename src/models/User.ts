import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        appleId: String,
        nbOfConnections: Number,
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
