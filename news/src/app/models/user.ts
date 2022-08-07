export class User {
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public mobileNumber: number,
        public city: string,
        public gender: string,
        public dob: Date

    ){}
}
// emailid,password,name,mobile,city,gender,dob