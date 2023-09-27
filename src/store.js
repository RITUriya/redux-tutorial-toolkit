import { createStoreHook } from "react-redux";
import userReducer from "./reducer/UserReducer";
export const store = createStoreHook({ reducer: { user: userReducer } });
