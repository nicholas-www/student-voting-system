import { connectDB } from "./config/db.js";
import app from "./app.js";
import "dotenv/config"

const PORT = process.env.PORT || 5000

// only start server if database connected successfully
connectDB().then(
    app.listen(PORT, () => {
        console.log(`Server listening on PORT:${PORT}`)
    })
)