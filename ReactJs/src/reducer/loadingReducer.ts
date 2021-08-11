export const initialState: LoadingState = {
  isLoading: false
}

interface LoadingState {
  isLoading: boolean
}

type LoadingAction = | { type: "START_LOADING" | "STOP_LOADING" }

export const loadingReducer = (state: LoadingState, action: LoadingAction) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };
  }
};
