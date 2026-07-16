import express from "express";
import routes from "./routes/routes.js";
import errorHandler from "./midlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", routes);

app.use(errorHandler);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
})