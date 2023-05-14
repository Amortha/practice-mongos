import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser)
    : Promise<IUser> => {

        //creating a new user
    const user = new User(payload) //user -> class user ->instance

    await user.save(); //build in intance methods custom instance

    console.log(user.fullName())
    return user
}

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
  
  
    return users;
}

export const getUsersByIdFromDB = async(payload:
    string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload },{
        name:1, contactNo:1
    })
    return user;
};

export const getAdminUsersFromDB = async()=> {
   
const admins = await User.getAdminUsers();

return admins;
//class ->Attach ->Method ->Directly cll using class
//user= new user
//user. instance methods
//user.getAdminUser()

};