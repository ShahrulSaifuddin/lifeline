import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsModalInfo, selectedCard } from "../redux/modalInfo";
import { setIsModalInfo } from "../redux/modalInfo";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const isModalInfoOpen = useSelector(selectIsModalInfo);
  const selectCard = useSelector(selectedCard);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        isModalInfoOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>
          Name: {selectCard.name.first} {selectCard.name.last}
        </h3>
        <h3>Email: {selectCard.email}</h3>
        <h3>Date of Birth: {selectCard.dob.date.slice(0, 10)}</h3>
        <h3>
          Location: {selectCard.location.city}, {selectCard.location.country}
        </h3>
        <button
          className="close-modal-btn"
          onClick={() => {
            dispatch(setIsModalInfo(false));
          }}
        >
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
