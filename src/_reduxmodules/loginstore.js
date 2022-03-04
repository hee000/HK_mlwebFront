const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


export const logIn = (email, password) => ({ type: LOGIN, email:email, password:password });
export const logOut = (email, password) => ({ type: LOGOUT, email:email, password:password });

const initialState = {
  logingged: false,
  email:"",
  password:""

};

export default function loggin(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logingged: true,
        email: action.email,
        password: action.password
      };
    case LOGOUT:
      return {
        ...state,
        logingged: false,
        email: "",
        password: ""
      };
    default:
      return state;
  }
}