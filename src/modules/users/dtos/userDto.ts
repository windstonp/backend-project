interface IUpdateUserRequestDto {
  id: number;
  password: string;
  name: string;
  number: string;
  profile_image: string;
}

interface IGetUserInfoRequest {
  id: number;
}
