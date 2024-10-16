import express from 'express';
const app = express();
app.use(express.json());
const PORT = 3000;
app.get("/washing-machines", (req, res) => {
    res.send("test");
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
