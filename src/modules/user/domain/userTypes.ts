interface UserProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  username: string;
}

interface UserPasswordProps {
  value: string;
  hashed?: boolean;
}

export { UserProps, UserPasswordProps };
