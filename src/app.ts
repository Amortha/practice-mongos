import express, { Application, NextFunction, Request, Response } from 'express'
import cors from "cors";
import { Schema, model } from 'mongoose';

const app: Application = express()

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    //inserting a test data into mongodb

    /*
    step1:interface
    step2:Schema
    Step3:Model
    step4:Database
    */

    // res.send('Hello World!')
    // next();

    //create an interface


    //creating schema using interface
  

});

export default app;
 // pattern MVC , Modular

 /*
 interface interface.ts
 Schema, Model -> model.ts
 route
 route function -> controller.ts
Database Query Function -> service
 */