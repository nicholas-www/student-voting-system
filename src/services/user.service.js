import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const createNewUser = async ({ email, password, role }) => {
	const hashedPassword = await bcrypt.hash(password);

	const user = await User.create({
		email: email,
		password: password,
		role: role,
	});

	return user;
};
