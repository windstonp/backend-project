interface IAuthRequest {
  email: string;
  password: string;
}

interface IForgotPasswordRequest extends Omit<IAuthRequest, "password"> {}

interface IRecoverPasswordRequest {
  token: string;
  password: string;
}
