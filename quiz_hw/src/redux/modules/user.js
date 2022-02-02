// user.js

//user 이름을 넣자!
// 점수를 넣자! (ranking 페이지를 위해서)
// 이름을 바꿔주자!

// Actions type들을 정해주는 부분
const SET_NAME = "user/SET_NAME";
const SET_MESSAGE = "user/SET_MESSAGE";

const initialState = {
  user_name: "",
  user_message: "",
};

// Action Creators
export function setName(name) {
  return { type: SET_NAME, name };
}

export const setMessage = (message) => {
  return { type: SET_MESSAGE, message };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/SET_NAME": {
      return { ...state, user_name: action.name };
    }

    case "user/SET_MESSAGE": {
      console.log(action);
      return { ...state, user_message: action.message };
    }

    default:
      return state;
  }
}
