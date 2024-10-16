import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
const dbUrl = process.env.MONGODB_URL;
if (dbUrl) {
    mongoose.connect(dbUrl).catch((err) => console.log(err));
}
const PORT = 3000;
app.get("/washing-machines", (_, res) => {
    res.send("test");
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
