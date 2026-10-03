import express from "express";
import type { Request, Response } from "express";

const route = express.Router();

route.get('/sample', (req: Request, res: Response) => {
    res.status(200).send("HELLO POOOO");
} )


export default route;