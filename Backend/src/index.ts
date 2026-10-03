import express, { Router } from "express";
import type { Request, Response } from "express";

const app = express();

//Import Route
import route from "./routes/sample.js";

//API Routes
app.use('/example', route);

const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
    res.send("Hello Clarenz");
} )     

app.listen(PORT, () => {
    console.log(`Server running on port 8080`);
})