import express, { Application, NextFunction, Request, Response } from 'express'
import cors from "cors";
const app: Application = express()

//Application routes
import userRoutes from './app/modules/user/user.route'

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// app.get('/api/v1/user',userRoutes);

app.use('/api/v1/user',userRoutes)
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
  



export default app;
 // pattern MVC , Modular

 /*
 interface interface.ts
 Schema, Model -> model.ts
 route
 route function -> controller.ts
Database Query Function -> service
 */