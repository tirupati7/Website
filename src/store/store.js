/* import { createStore } from 'redux';

import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());

export default store; */




import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import  postReducer from "./reducer/postReducer";

function configureStore(initialState = {}) {
  const reducer = combineReducers({
    auth: () => ({ mock: true }),
    posts: persistReducer(
      {
        key: "posts", // key for localStorage key, will be: "persist:posts"
        storage,
        debug: true,
        blacklist: ["detailedPost"]
      },
      postReducer
    )
  });

  const store = createStore(
    persistReducer(
      {
        key: "root",
        debug: true,
        storage,
        whitelist: ["auth"]
      },
      reducer
    ),
    initialState
  );


  const persistor = persistStore(store, null, () => { });

  return { store, persistor };
}

export default configureStore;
