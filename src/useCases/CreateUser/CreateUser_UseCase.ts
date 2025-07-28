import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUser_Repository";
import { ICreateUserRequesDTO } from "./CreateUser_DTO";

export class CreateUser_UseCase {
  // Única responsabilidade de criar usuário - SRP - Primeiro princípio de SOLID

  constructor(
    private userRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {
    // LSP - No momento em que estamos aplicando uma interface ao valor que a classe recebe, não interessa qual repositório passar para ele (PostgreSQL, Mongo). Pois se tiver os métodos de findByEmail e save, está tudo certo.
  }

  async execute(data: ICreateUserRequesDTO) {
    const userAreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAreadyExists) {
      throw new Error("User aready exists!");
    }

    const newUser = new User(data);

    await this.userRepository.save(newUser);

    const mail = {
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        email: "temcarga299@gmail.com",
        name: "TemCarga",
      },
      subject: "Entrega de alguma coisa",
      body: "É pra hoje!",
    };

    await this.mailProvider.sendMail(mail);
    // DIP - O código não depende diretamente de utilizar o banco de dados, como INSERT ou SELECT. É utilizado funções externas para essa funcionalidade
  }
}
