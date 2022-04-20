import { IUser } from "./functions";

type TStadardResponse = {
  success: boolean;
  result: IUser | string;
  message?: string;
};

class BaseService {
  public ok(data: IUser, message: string): TStadardResponse {
    return {
      success: true,
      result: data,
      message: message,
    };
  }

  public fail(error = "Unexpected error"): TStadardResponse {
    return {
      success: false,
      result: error,
    };
  }
}

export class User extends BaseService {
  constructor(private userData: IUser) {
    super();
  }

  public getUser(): TStadardResponse {
    return this.ok(
      {
        ...this.userData,
        id: Number((Math.random() * 1000).toFixed(0)),
      },
      `User ${this.userData.name} found`,
    );
  }
}
