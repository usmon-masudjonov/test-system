export interface CreateUserDTO {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  username: string;
  password: string;
}

export class CreateUserResponseDTO {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  username: string;
  password: string;
}
