import { createNewUser } from "../services/user.service.js";

export const signUp = async (req, res, next) => {
	try {
		const { lastName, firstName, email, password, role } = req.body;

		if (!lastName || !firstName || !email || !password || !role) {
			return res
				.status(400)
				.json({ msg: "Required: [name, email, password, role]" });
		}

		const user = await createNewUser({ lastName, firstName, email, password, role });

		res.status(200).json({
			msg: "User created.",
			data: {
				user: user,
			},
		});
	} catch (err) {
		next(err);
	}
};
