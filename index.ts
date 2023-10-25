import express, { Express, Request, Response } from "express";
const port = 8001;
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
