import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const createNewUser = async ({ lastName, firstName, email, password, role }) => {
	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await User.create({
		lastName: lastName,
		firstName: firstName,
		email: email,
		password: hashedPassword,
		role: role,
	});

	return user;
};
