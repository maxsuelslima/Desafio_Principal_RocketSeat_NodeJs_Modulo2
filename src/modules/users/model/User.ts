import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(name:string,email:string){
    this.id= uuidV4();
    this.name= name;
    this.admin= false;
    this.email= email;
    this.createdAt= new Date();
    this.updatedAt= new Date();
  }
}

export { User };
