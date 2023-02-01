const app = require("express")();
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const { PORT } = require("envvars");

const routes = require("./routes/index.route");

dotenv.config();

//configurations
app.set("json spaces", 2);
app.set("port", PORT || 3500);

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//Routes
app.use(routes);

module.exports = app;
