export interface IUser {
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