//  app.js , vansh , 4th june

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
