import React, { createContext, useContext, useReducer } from "react";

// 초기 state 데이터
const initialState = {
  movieList: [],
  movieDetailList: [],
};

// 영화 state를 관리해주는 reducer
function movieReducer(state, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movieList: action.data,
      };
    case "SEARCH_MOVIES":
      return {
        ...state,
        movieList: action.data,
      };
    case "DETAIL_MOVIES":
      return {
        ...state,
        movieDetailList: action.data,
      };
    default:
      throw new Error(`Unhandled actino type : ${action.type}`);
  }
}

const MovieStateContext = createContext();
const MovieDispatchContext = createContext();

export function useMovieState() {
  const context = useContext(MovieStateContext);
  if (!context) {
    throw new Error("Can't not find useMovieState");
  }
}

export function useMovieDispatch() {
  const context = useContext(MovieDispatchContext);
  if (!context) {
    throw new Error("Can't not find useMovieDispatch");
  }
}

export function MovieProvider({ children }) {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieStateContext.Provider value={state}>
      <MovieDispatchContext.Provider value={dispatch}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieStateContext.Provider>
  );
}
