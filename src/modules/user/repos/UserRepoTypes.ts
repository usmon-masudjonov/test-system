import { User } from "../domain/User";

export interface IUserRepo {
  findUserByPhoneNumber(phoneNumber: string): Promise<User>;
  exists(phoneNumber: string): Promise<boolean>;
  save(user: User): Promise<void>;
}
