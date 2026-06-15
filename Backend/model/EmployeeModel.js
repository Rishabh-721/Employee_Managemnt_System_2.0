import mongoose, { model } from "mongoose";

const EmployeeSchema = mongoose.Schema({
    empid: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    client: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active",
    },
    isDeleted: {
    type: Boolean,
    default: false
    }
},{
    timestamps: true
});

export default mongoose.model("employee", EmployeeSchema);