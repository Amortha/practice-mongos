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
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: String,
            middleName?: String
            lastName: String;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

    //creating schema using interface
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String
            },
            lastName: {
                type: String,
                required: true
            },


        },
        dateOfBirth: {
            type: String
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        email: {
            type: String,
        },
        contactNo: {
            type: String,
            required: true
        },
        emergencyContactNo: {
            type: String,
            required: true
        },

        presentAddress: {
            type: String,
            required: true
        },

        permanentAddress: {
            type: String,
            required: true
        }
    });

    //model
    const User = model<IUser>("User", userSchema);
    const createUserToDB = async () => {
        const user = new User({
            id: "779",
            role: "student",
            name: {
                firstName: "Mr.x",
                middleName: 'Abedin',
                lastName: 'persian',
            },
            gender: "male",
            email: 'adc@gmail.com',
            contactNo: '01829704087',
            emergencyContactNo: '01821512141',
            presentAddress: 'Uganda',
            permanentAddress: 'Usa'
        });
        await user.save();
        console.log(user);

    }
    createUserToDB();

});






export default app;