import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

const PORT = 3000

app.get("/washing-machines", (req: Request, res: Response) => {
  res.send("test")
})

app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}`)
})
