import config from "./../config/config.js";
import app from "./express.js";
import mongoose from "mongoose";

// Connection URL
mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://dougscheible:fossil69@cluster0.n9nhf0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected up in here..."))
  .catch((err) => console.log(err));

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
