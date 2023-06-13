import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import TimelineContent from "./components/TimelineContent";
import TimelineOptions from "./components/TimelineOptions";
import styles from "./styles.module.css"



function App() {
  return (
    <div className={styles.bodyContainer}>
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <TimelineOptions></TimelineOptions>
      <TimelineContent></TimelineContent>

    </div>
  );
}

export default App;
