const mongoose = require("mongoose");

// MongoDB connection URI
const mongoURI = "mongodb+srv://officialujjwalroy:zZJwyeQwXexSITAa@cluster0.c2tzu45.mongodb.net/Cluster0?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Get the default connection 
const db = mongoose.connection;

// Event listeners for connection
db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

// Close the MongoDB connection when the Node.js process ends
process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("MongoDB connection closed");
  process.exit(0);
});
