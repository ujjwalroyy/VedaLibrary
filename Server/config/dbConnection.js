const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://officialujjwalroy:zZJwyeQwXexSITAa@cluster0.c2tzu45.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("MongoDB connection closed");
  process.exit(0);
});
