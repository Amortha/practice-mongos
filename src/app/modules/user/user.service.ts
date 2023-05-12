import User from "./user.model";

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