// 랭킹 정보를 넣어줄거야!
// 랭킹 정보에 하나를 더 추가해줄거야! (추가되는 정보는 퀴즈 푼 유저 정보야! {점수, 이름, 메세지})

const ADD_RANK = "ranking/ADD_RANK";

export const addRank = (user_ranking) => {
  return { type: ADD_RANK, user_ranking };
};

const initialState = {
  ranking: [
    { score: 20, user_name: "김철수", message: "라이언 안녕!" },
    { score: 80, user_name: "김영희", message: "라이언 안녕!" },
    { score: 30, user_name: "김진수", message: "라이언 안녕!" },
  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ranking/ADD_RANK": {
      console.log(action);
      console.log(state);
      const new_ranking_list = [...state.ranking, action.user_ranking];
      return { ...state, ranking: new_ranking_list };
    }

    default:
      return state;
  }
}
