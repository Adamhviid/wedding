import "./App.css";
import weddingPhoto from "./assets/JustMarried.jpg";
// import SaveTheDate from "./assets/SaveTheDate.jpeg";

import CountDown from "./components/CountDown/CountDown";

function App() {
  return (
    <div className="container">
      <div>
        <h1>Adam & Amy</h1>
        <h3>{}27 marts 2027</h3>
      </div>

      <hr />

      <div>
        <h3>The Grand Hotel</h3>
        <p>Taipei, Taiwan</p>
      </div>

      <hr />

      <CountDown />

      <img src={weddingPhoto} alt="Adam and Amy" className="mainPhoto" />
      {/* <img src={SaveTheDate} alt="Save The Date" className="mainPhoto" /> */}
    </div>
  );
}

export default App;
