export const initialState: AuthState = {
  isLoggedIn: false,
  userToken: '',
}

interface AuthState {
  isLoggedIn: boolean,
  userToken: string
}

type AuthAction = | { type: "LOGGED_IN", token: string } | { type: "LOGGED_OUT" }

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        isLoggedIn: true,
        userToken: action.token,
      };
    case "LOGGED_OUT":
      return {
        ...state,
        isLoggedIn: false,
      };
  }
};
