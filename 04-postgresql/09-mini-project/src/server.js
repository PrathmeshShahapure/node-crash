
import "dotenv/config"
import app from "./app.js"


app.listen(process.env.expressPort, (req, res) => {
  console.log("aapp is running");
});

  