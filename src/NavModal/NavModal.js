import React, { useState } from "react";
import "./navModal.css";

export const NavModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <div>
        <button className="btn" onClick={toggleModal}>
          Profile
        </button>
      </div>
    </div>
  );
};
