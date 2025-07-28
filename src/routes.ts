import { Request, Response, Router } from "express";
import { createUser_Controller } from "./useCases/CreateUser";

const router = Router();

router.post("/user", (request: Request, response: Response) => {  
  return createUser_Controller.handle(request, response);
});

export { router };
