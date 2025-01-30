import express from "express";
import path from "path";

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("api/hello", (req, res) => {
  console.log("HERE IN API/HELLO");
});

// Catch-all route for your SPA (important for history mode)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

export default app;
