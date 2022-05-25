import { configureStore } from "@reduxjs/toolkit";
import modalInfoReducer from "./modalInfo";

export const store = configureStore({
  reducer: {
    modalInfo: modalInfoReducer,
  },
});
