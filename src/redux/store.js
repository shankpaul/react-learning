import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers/book_reducer";

const root_reducer = combineReducers({
  books: bookReducer
});
const store = createStore(root_reducer);
window.store = store;

export default store;
