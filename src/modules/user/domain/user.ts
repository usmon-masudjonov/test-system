import { AggregateRoot } from "../../../core/domain/aggregateRoot";
import { UniqueEntityID } from "../../../core/domain/uniqueEntityID";
import { UserProps } from "./userTypes";

export class User extends AggregateRoot<UserProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get firstName(): string {
    return this.props.firstName;
  }

  get lastName(): string {
    return this.props.lastName;
  }

  get password(): string {
    return this.props.password;
  }

  get phoneNumber(): string {
    return this.props.phoneNumber;
  }

  get username(): string {
    return this.props.username;
  }

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: UserProps, id?: UniqueEntityID) {
    const user = new User(
      {
        ...props,
      },
      id
    );
  }
}
