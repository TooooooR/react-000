import React, { useState } from 'react';

function Phonemodal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={openModal}>Зв'язатися з нами</button>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Номер телефону: <strong>ВАШ НОМЕР ТЕЛЕФОНУ</strong></p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Phonemodal;
