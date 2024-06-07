import React, { useState } from 'react';
import './ShowPictures.css';
import Modal from "./ModalIcon/Modal" 

function ShowPictures({ photos, limit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openModal = (index) => {
    setCurrentPhotoIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const showPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
        <div className='wrrr'>
            <div className="photo-gallery">
                {photos.slice(0, limit - 1).map((photo, index) => (
                <img key={index} src={photo} alt={`photo-${index}`} className="photo" onClick={() => openModal(index)} />
                ))}
                {photos.length > limit && (
                <div className="photo see-all" onClick={() => openModal(limit - 1)}>
                    <span>See all +{photos.length - (limit - 1)}</span>
                </div>
                )}
            </div>
        </div>    
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="modal-content">
            <button className="modal-prev" onClick={showPreviousPhoto}>&lt;</button>
            <img src={photos[currentPhotoIndex]} alt={`photo-${currentPhotoIndex}`} className="modal-photo" />
            <button className="modal-next" onClick={showNextPhoto}>&gt;</button>
            </div>
        </Modal>
    </>
  );
}

export default ShowPictures;

