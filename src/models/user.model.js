import mongoose from "mongoose";

const PREFIX = { admin: "AD", student: "ST" };

async function nextUserId(role) {
	const prefix = PREFIX[role];
	const res = await mongoose.connection
		.collection("counters")
		.findOneAndUpdate(
			{ _id: prefix }, // separate counter per prefix
			{ $inc: { count: 1 } },
			{ returnDocument: "after", upsert: true },
		);
	const doc = res.value ?? res; // driver v6+ returns the doc directly
	const n = String(doc.count).padStart(6, "0");
	return `${prefix}-${n.slice(0, 3)}-${n.slice(3)}`; // AD-000-001
	// no dashes: return `${prefix}${n}`;
}

const userSchema = new mongoose.Schema({
	lastName: { type: String, required: true },
	firstName: { type: String, required: true },
	userId: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, enum: ["student", "admin"], default: "student" },
});

userSchema.pre("validate", async function () {
	if (this.isNew && !this.userId) {
		this.userId = await nextUserId(this.role);
	}
});

const User = mongoose.model("User", userSchema);
export default User;
