export type InitialState = {
  isLoginSuccess: boolean;
  newUserModalVisble: boolean;
  user: UserType;
};

export type LoginStackParams = {
  LoginScreen: undefined;
};

export type AppStackParams = {
  HomeScreen: undefined;
  DetailScreen: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  };
};

export type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
};
