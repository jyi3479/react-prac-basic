import { createStore, combineReducers } from "redux";
import quiz from "./modules/quiz";
// store 만들기!

// 리듀서를 묶는다
const rootReducer = combineReducers({ quiz });
// 리듀서 모음 + 그 외의 옵션들까지 엮어서 store를 만든다.
const store = createStore(rootReducer);

export default store;
