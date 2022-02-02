// quiz.js

//어떤 데이터를 넣을거야 -> 퀴즈 목록 / 유저 정답 목록
// 어떻게 수정 해볼거야 -> 유저가 선택한 오엑스 정답을 정답 목록에 추가해줄거야

// action type 지정
const ADD_ANSWER = "quiz/ADD_ANSWER";

const initialState = {
  quiz_list: [
    { question: "라이언은 네이버 캐릭터이다.", answer: false },
    { question: "라이언은 삼성 캐릭터이다.", answer: false },
    { question: "라이언은 카카오 캐릭터이다.", answer: true },
  ],
  user_answer_list: [],
};

// action 생성 함수 만들기
export const addAnswer = (user_answer) => {
  return { type: ADD_ANSWER, user_answer };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "quiz/ADD_ANSWER": {
      console.log(action);
      const new_user_answer_list = [
        ...state.user_answer_list,
        action.user_answer,
      ];
      console.log(new_user_answer_list);
      return { ...state, user_answer_list: new_user_answer_list };
    }

    default:
      return state;
  }
}
