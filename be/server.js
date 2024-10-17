var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const dbUrl = process.env.MONGODB_URL;
if (!dbUrl) {
    throw new Error("No database URL found in the environment variables");
}
const client = new MongoClient(dbUrl);
const dbName = "washing-machines-db";
const collectionName = "washing-machines-collection";
const PORT = 3000;
let db;
let collection;
client
    .connect()
    .then((client) => {
    db = client.db(dbName);
    collection = db.collection(collectionName);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})
    .catch((error) => console.error(error));
app.get("/washing-machines", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allMachines = yield collection.find({}).toArray();
    res.send({ data: allMachines });
}));
