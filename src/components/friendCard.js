import React from "react";
import { useDispatch } from "react-redux";
import { setIsModalInfo, setSelectedCard } from "../redux/modalInfo";

const Friend = ({ picture, name, email, cell, dob, location }) => {
  const dispatch = useDispatch();

  const selectCard = () => {
    dispatch(
      setSelectedCard({
        picture: picture,
        name: name,
        email: email,
        cell: cell,
        dob: dob,
        location: location,
      })
    );
    dispatch(setIsModalInfo(true));
  };

  return (
    <article onClick={selectCard} className="card">
      <img src={picture.medium} alt={picture.medium} />
      <h4>
        {name.first} {name.last}
      </h4>
      <h6>{email}</h6>
      <p>{cell}</p>
    </article>
  );
};

export default Friend;
