// user.js

// Actions type들을 정해주는 부분
const SETNAME = "user/SETNAME";

const initialState = {
  name: ["미니언"],
};

// Action Creators
export function setName(user_name) {
  return { type: SETNAME, user_name };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/SETNAME": {
      // 원래 리스트에서 action에 들어간 새로운 데이터 user_name을 추가하기
      const new_user_list = [...state.name, action.user_name];
      // state의 list에 바뀐 배열로 반환
      console.log(new_user_list);
      return { name: new_user_list };
    }

    default:
      return state;
  }
}
