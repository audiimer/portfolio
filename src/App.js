import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import styles from "./styles.module.css";
import CustomModal from "./components/CustomModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.bodyContainer}>
      <Header onContact={() => setModalOpen(true)} />
      <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <Intro />
      <About onContact={() => setModalOpen(true)} />

      <Timeline />
    </div>
  );
}

export default App;
