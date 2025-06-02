// src/components/CustomModal.js
import React from "react";
import Modal from "react-modal";
import styles from "./modal.module.css";

import profile from "../images/intropic.jpg";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomModal = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Profile Card"
    className={styles.modal}
    overlayClassName={styles.overlay}
  >
    <button className={styles.closeBtn} onClick={onClose}>
      ×
    </button>

    <div className={styles.modalContent}>
      <div className={styles.leftPanel}>
        <img src={profile} alt="avatar" className={styles.avatar} />
        <h2 className={styles.name}>Audis Mercado</h2>
        <p className={styles.role}>Senior Software Analyst</p>
      </div>

      <div className={styles.rightPanel}>
        <h3 className={styles.sectionTitle}>Information</h3>
        <div className={styles.infoRow}>
          <span className={styles.label}>Email:</span>
          <span className={styles.value}>audisg.mercado@gmail.com</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>Phone:</span>
          <span className={styles.value}>484-456-0802</span>
        </div>

        <h3 className={styles.sectionTitle}>Work Location</h3>
        <div className={styles.projectSection}>
          <div>
            <p className={styles.subTitle}>Campus</p>
            <p className={styles.value}>Lehigh University</p>
          </div>
          <div>
            <p className={styles.subTitle}>Department</p>
            <p className={styles.value}>LTS</p>
          </div>
        </div>

        <div className={styles.socialIcons}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/audiimer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/audis-mercado/"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  </Modal>
);

export default CustomModal;
