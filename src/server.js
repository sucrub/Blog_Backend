const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connect = require("./database/database");
const port = process.env.PORT || 8081;
const hostname = process.env.HOSTNAME || "localhost";
const useRouter = require("./routes/web");

const app = express();
app.use(cors());

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
app.use("/", useRouter);

app.listen(port, hostname, async () => {
  await connect();
  console.log(`Example is running on ${hostname}:${port}`);
});
