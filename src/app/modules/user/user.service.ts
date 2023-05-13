import User from "./user.model";

export const createUserToDB = async () => {
    const user = await new User({
        id: "80077",
        role: "student",
        name: {
            firstName: "Mr.x",
            middleName: 'Abedin',
            lastName: 'persian',
        },
        password:"ami to jani na",
        gender: "male",
        email: 'adc@gmail.com',
        contactNo: '01829704087',
        emergencyContactNo: '01821512141',
        presentAddress: 'Uganda',
        permanentAddress: 'Usa'
    });
    await user.save();

return user
}