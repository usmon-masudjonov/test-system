import { User } from "../domain/user";

export interface IUserRepo {
  findUserByPhoneNumber(phoneNumber: string): Promise<User>;
  exists(phoneNumber: string): Promise<boolean>;
  save(user: User): Promise<void>;
}
