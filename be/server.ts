import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017").catch((err) => console.log(err));

const PORT = 3000;

app.get("/washing-machines", (_: Request, res: Response) => {
  res.send("test");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
