import { json, urlencoded } from "body-parser";
import express from "express";
import { userRouter } from "./routes";
import connection from "./database/config";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

// Routes
app.use("/users", userRouter.default);

connection
  .initialize()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });
app.listen(3000, () => {
  console.log("Server started on port 3000");
});