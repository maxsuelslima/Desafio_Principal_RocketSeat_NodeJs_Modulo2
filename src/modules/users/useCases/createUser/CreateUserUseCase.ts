import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExist=this.usersRepository.findByEmail(email)
    if(!userAlreadyExist){
      const user=this.usersRepository.create({email,name})
      return user
    }
    throw new Error("Mensagem do erro");
  }
}

export { CreateUserUseCase };
