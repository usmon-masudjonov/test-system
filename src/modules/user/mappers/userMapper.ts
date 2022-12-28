import { UniqueEntityID } from "../../../core/domain/uniqueEntityID";
import { Mapper } from "../../../core/infra/mapper";
import { Result } from "../../../core/logic/result";
import { User } from "../domain/user";
import { UserPassword } from "../domain/valueObjects/userPassword";
import { CreateUserResponseDTO } from "../useCases/create-user/createUserDTO";

export class UserMapper implements Mapper<User> {
  toDomain(record: any): User {
    const user = User.create(
      {
        firstName: record.firstName,
        lastName: record.lastName,
        password: record.password,
        phoneNumber: record.phoneNumber,
        username: record.username,
      },
      record.id
    );

    return user.getValue();
  }

  toPersistence(entity: User) {
    return {
      id: entity.id.toString(),
      first_name: entity.firstName,
      last_name: entity.lastName,
      password: entity.password,
      phone_number: entity.phoneNumber,
      username: entity.username,
    };
  }

  toResponse(entity: User): CreateUserResponseDTO {
    const props = entity.props;
    const response = new CreateUserResponseDTO();

    response.id = entity.id.toString();
    response.firstName = props.firstName;
    response.lastName = props.lastName;
    response.username = props.username;
    response.phoneNumber = props.phoneNumber;

    return response;
  }
}
