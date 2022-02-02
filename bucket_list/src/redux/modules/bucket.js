// bucket.js

// Actions type들을 정해주는 부분
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const DELETE = "bucket/DELETE";

const initialState = {
  list: [
    { text: "영화관 가기", completed: false },
    { text: "매일 책읽기", completed: false },
    { text: "수영 배우기", completed: false },
    { text: "코딩하기", completed: false },
  ],
  // list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩하기"],
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}

export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      // 원래 리스트에서 action에 들어간 새로운 데이터 bucket을 추가하기
      const new_bucket_list = [...state.list, action.bucket];
      // state의 list에 바뀐 배열로 반환
      return { list: new_bucket_list };
    }

    case "bucket/UPDATE": {
      const new_bucket_list = state.list.map((l, idx) => {
        if (parseInt(action.bucket_index) === idx) {
          // 다른 l들은 그대로 넣고 해당하는 l에서는 completed 수정해서 반환
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      console.log(new_bucket_list);
      return { list: new_bucket_list };
    }

    case "bucket/DELETE": {
      // 삭제 누른 것의 index와 같지 않은(true) 요소들만 반환해주도록 filter 사용
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      });
      // return new_bucket_list 하면 list라는 키값이 없기 때문에, 컴포넌트에서 state.list로 받아올 수 없음
      // initialState 형식으로 반환해주기
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
