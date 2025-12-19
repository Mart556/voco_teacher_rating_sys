import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDb } from "./database";
import router from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type"],
	})
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.get("/", (req, res) => {
	res.json({ message: "Teacher Rating System API" });
});

// Initialize database and start server
initDb()
	.then(() => {
		app.listen(PORT, "0.0.0.0", () => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.error("Failed to initialize database:", error);
		process.exit(1);
	});

export default app;
