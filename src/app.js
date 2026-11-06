import express from "express";
import authRouter from "./routes/auth.route.js"

const app = express();

app.use(express.json());

//Routes
app.use("/votely/api/v1/auth", authRouter)

app.get("/votely/api/v1/health", (req, res) => {
	res.status(200).json({ msg: "OK!" });
});

app.use((req, res) => {
    res.status(404).json({msg: "Page not found"})
})

export default app;
