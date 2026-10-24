import express from "express";

const app = express();

app.use(express.json());

app.get("/votely/api/v1/health", (req, res) => {
	res.status(200).json({ msg: "OK!" });
});

app.use((req, res) => {
    res.status(404).json({msg: "Page not found"})
})

export default app;
