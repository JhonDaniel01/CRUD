const express = require("express");
require("dotenv").config({ path: __dirname + "/../.env" });
const routes = require("./routes/index");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
app.use("/", routes);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
