import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUser_Controller } from "./CreateUser_Controller";
import { CreateUser_UseCase } from "./CreateUser_UseCase";

const postgresUsersRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUser_UseCase = new CreateUser_UseCase(
  postgresUsersRepository,
  mailtrapMailProvider
);

const createUser_Controller = new CreateUser_Controller(createUser_UseCase)

export {createUser_Controller, createUser_UseCase}