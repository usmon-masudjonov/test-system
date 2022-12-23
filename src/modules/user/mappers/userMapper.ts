import { UniqueEntityID } from "../../../core/domain/uniqueEntityID";
import { Mapper } from "../../../core/infra/mapper";
import { User } from "../domain/user";
import { UserPassword } from "../domain/valueObjects/userPassword";

export class UserMapper extends Mapper<User> {
  public toDomain(raw: any): User {
    return {} as User;
  }

  public toPersistence(user: User) {
    return {
      id: user.id.toString(),
      phone_number: user.phoneNumber,
      password: user.password,
      first_name: user.firstName,
      last_name: user.lastName,
      username: user.username,
    };
  }
}
