// === backend/app.js ===
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const questionRoutes = require("./routes/question");
const runCodeRoutes = require("./routes/runCode");

const app = express();

app.use(cors());
app.use(express.json());

//const MONGO_URI = "mongodb+srv://hemadiksitha:HV@hema.arbgjdb.mongodb.net/?retryWrites=true&w=majority&tls=true";
const MONGO_URI = "mongodb+srv://hemadiksitha:HV@hema.arbgjdb.mongodb.net/coding_questions?retryWrites=true&w=majority&tls=true";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/run-code", runCodeRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
