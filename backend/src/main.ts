import { json, urlencoded } from "body-parser";
import express from "express";
import { userRouter } from "./routes";
import connection from "./database/config";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/users", userRouter.default);

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });
app.listen(3000, () => {
  console.log("Server started on port 3000");
});