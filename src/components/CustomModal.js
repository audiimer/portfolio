import React from 'react';
import Modal from 'react-modal';
import styles from './modal.module.css';

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className={styles.modal} // Apply modal class from the CSS module
      overlayClassName={styles.overlay} // Apply overlay class from the CSS module
    >
      <button className={styles.closeBtn} onClick={onClose}>
        X
      </button>
      {children}
    </Modal>
  );
};

export default CustomModal;
