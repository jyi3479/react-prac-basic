// user.js

//user 이름을 넣자!
// 점수를 넣자! (ranking 페이지를 위해서)
// 이름을 바꿔주자!

// Actions type들을 정해주는 부분
const SET_NAME = "user/SET_NAME";

const initialState = {
  user_name: "",
};

// Action Creators
export function setName(user_name) {
  return { type: SET_NAME, user_name };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/SET_NAME": {
      // 원래 리스트에서 action에 들어간 새로운 데이터 user_name을 추가하기
      const new_user_list = [...state.user_name, action.user_name];
      // state의 list에 바뀐 배열로 반환
      return { name: new_user_list };
    }

    default:
      return state;
  }
}
