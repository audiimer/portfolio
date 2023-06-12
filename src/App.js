import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import TimelineContent from "./components/TimelineContent";
import TimelineOptions from "./components/TimelineOptions";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <TimelineOptions></TimelineOptions>
      <TimelineContent></TimelineContent>
    </div>
  );
}

export default App;
