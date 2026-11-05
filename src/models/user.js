import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    userId: {
        type: String,  // admin: AD-XXX-XXX, student: ST-XXX-XXX
        required: true,
        unique: true
    },


    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['student', 'admin'],
        default: 'student'
    }
})

const User = mongoose.model('User', userSchema)
export default User