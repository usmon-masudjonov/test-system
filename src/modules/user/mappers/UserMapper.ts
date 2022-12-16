import { UniqueEntityID } from "../../../core/domain/UniqueEntityID";
import { Mapper } from "../../../core/infra/Mapper";
import { User } from "../domain/User";
import { UserPassword } from "../domain/valueObjects/UserPassword";

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
