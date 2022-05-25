import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalInfoOpen: false,
  isExceedLimit: false,
  selectedCard: {
    picture: null,
    name: null,
    email: null,
    cell: null,
    dob: null,
    location: null,
  },
};

export const modalInfoSlice = createSlice({
  name: "modalInfo",
  initialState,
  reducers: {
    setIsModalInfo: (state, action) => {
      state.isModalInfoOpen = action.payload;
    },
    setExceedLimit: (state, action) => {
      state.isExceedLimit = action.payload;
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
  },
});

export const { setIsModalInfo } = modalInfoSlice.actions;
export const { setExceedLimit } = modalInfoSlice.actions;
export const { setSelectedCard } = modalInfoSlice.actions;

export const selectIsModalInfo = (state) => state.modalInfo.isModalInfoOpen;
export const selectExceedLimit = (state) => state.modalInfo.isExceedLimit;
export const selectedCard = (state) => state.modalInfo.selectedCard;

export default modalInfoSlice.reducer;
