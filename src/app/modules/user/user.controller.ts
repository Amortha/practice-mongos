import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAdminUsersFromDB, getUsersByIdFromDB, getUsersFromDB } from "./user.service";

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
 const data = req.body;
    const user = await createUserToDB(data)


    res.status(200).json({
        status: " success",
        data: user,
    })
};
export const getUsers = async (req: Request, res: Response,
    next: NextFunction
) => {
    const user = await getUsersFromDB()
    res.status(200).json({
        status: " success",
        data: user,
    })
};

    //pattern

    //Route-> controller -> service
    export const getUserById = async (
        req: Request, 
        res: Response,
        next: NextFunction
    ) => {
        const {id}= req.params;
        const user = await getUsersByIdFromDB(id)
        console.log("hitted from getAdminUser")
        res.status(200).json({
            status: " success",
            data: user,
        })
    };
    export const getAdminUsers = async (
        req: Request, 
        res: Response,
        next: NextFunction
    ) => {
    console.log("hitted from getAdminUser")
        const user = await getAdminUsersFromDB()
        res.status(200).json({
            status: " success",
            data: user,
        })
    };
    