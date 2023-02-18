export type InitialState = {
  isLoginSuccess:boolean
  };

  export type LoginStackParams = {
    LoginScreen: undefined;
  };
  
  export type AppStackParams = {
    HomeScreen: undefined;
    DetailScreen:{
      id:number,
      title:string,
      completed:boolean
    }
  };
 