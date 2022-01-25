import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// para llevar a cabo acciones asíncronas
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// añadir nuevos reducers
// aunque solo tengamos uno, es mejor así
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer,
});

// no podemos mandarle varios reducers por defecto
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
