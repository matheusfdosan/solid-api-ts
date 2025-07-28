import { Request, Response } from "express";
import { CreateUser_UseCase } from "./CreateUser_UseCase";

export class CreateUser_Controller {
  constructor(private CreateUser_UseCase: CreateUser_UseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    
    try {
      await this.CreateUser_UseCase.execute({ name, email, password });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).send(error?.message || "Unexpected Error!");
    }
  }
}
