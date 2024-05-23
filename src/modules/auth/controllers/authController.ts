import { Request, Response } from "express";
import {
  AuthenticateUserUseCase,
  ForgotPasswordUseCase,
  RecoverPasswordUseCase,
  RegisterUserUseCase,
} from "../useCases";

export class AuthController {
  async SignIn(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authUseCase = new AuthenticateUserUseCase();

    const result = await authUseCase.execute({ email, password });

    return response.status(200).json(result);
  }

  async RegisterUser(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authRegisterUseCase = new RegisterUserUseCase();

    const result = await authRegisterUseCase.execute({ email, password });

    return response.status(200).json(result);
  }

  async ForgotPassword(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email } = request.body;

    const forgotPasswordUseCase = new ForgotPasswordUseCase();

    const result = await forgotPasswordUseCase.execute({ email });

    return response.status(200).json(result);
  }

  async RecoverPassword(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { password, token } = request.body;

    if (!token) {
      response.status(401).json({
        message: "token not found!",
      });
    }

    const recoverPasswordUseCase = new RecoverPasswordUseCase();

    const result = await recoverPasswordUseCase.execute({ token, password });

    return response.status(200).json(result);
  }
}
