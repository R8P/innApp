export type InitialState = {
  isLoginSuccess: boolean;
  newUserModalVisble:boolean;
  users: {
    id:number,
    name: string;
    lastName: string;
    email: string;
    avatar: string;
  };
};

export type LoginStackParams = {
  LoginScreen: undefined;
};

export type AppStackParams = {
  HomeScreen: undefined;
  DetailScreen: {
    id: number;
    name: string;
    lastName: string;
    email: string;
    avatar: string;
  };
};
