import { Request, Response } from "express";
import { GetUserInfoUseCase, UpdateUserInfoUseCase } from "../useCases";
import { getUserIdFromRequest } from "modules/utils";

export class UserController {
  async GetUserInfoById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const getUserInfoUseCase = new GetUserInfoUseCase();

    const result = await getUserInfoUseCase.execute({ id: Number(id) });

    return response.status(200).json(result);
  }

  async UpdateUserInfo(
    request: Request,
    response: Response
  ): Promise<Response> {
    const requestData = request.body;
    const loggedUserId = getUserIdFromRequest(request);
    const updateUserInfoUseCase = new UpdateUserInfoUseCase();

    const result = await updateUserInfoUseCase.execute({
      ...requestData,
      id: loggedUserId,
    });

    return response.status(200).json(result);
  }
}
