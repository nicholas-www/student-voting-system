import { createNewUser } from "../services/user.service.js";

export const signUp = async (req, res, next) => {
	try {
		const { email, password, role } = req.body;

		if (!email || !password || !role) {
			return res
				.status(400)
				.json({ msg: "Required: [email, password, role]" });
		}

		const user = await createNewUser({ email, password, role });

		res.status(200).json({
			msg: "User created.",
			data: {
				user: user,
			},
		});
	} catch (err) {
		next(err)
	}
};
