import "./App.css";
import Form from "./Form";
import CurrentTemp from "./CurrentTemp";
import CurrentDate from "./CurrentDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main-frame mt-5">
          <Form />
          <CurrentDate />
          <br />
          <CurrentTemp />
          <WeatherInfo />
          <WeatherForecast />
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
