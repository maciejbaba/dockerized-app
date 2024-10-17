import express, { Request, Response } from "express";
import { Collection, MongoClient } from "mongodb";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

const dbUrl = process.env.MONGODB_URL;

if (!dbUrl) {
  throw new Error("No database URL found in the environment variables");
}

const client = new MongoClient(dbUrl);

const dbName = "washing-machines-db";
const collectionName = "machines";

const PORT = 3000;

type EnergyClass = "A" | "B" | "C";
type Capacity = 8 | 9 | 10.5;

type Features =
  | "Drzwi AddWash™"
  | "Panel AI Control"
  | "Silnik inwerterowy"
  | "Wyświetlacz elektroniczny";

interface IProduct {
  image: string;
  code: string;
  name: string;
  color: string;
  capacity: Capacity;
  dimensions: string;
  features: Features[];
  energyClass: EnergyClass;
  price: {
    value: number;
    currency: string;
    installment: {
      value: number;
      period: number;
    };
    validFrom: Date;
    validTo: Date;
  };
}

let db;
let collection: Collection<IProduct>;

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

app.get("/washing-machines", async (_: Request, res: Response) => {
  const allMachines: IProduct[] = await collection.find({}).toArray();

  res.send({ data: allMachines });
});
