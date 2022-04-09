import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Card from "./components/Card";
import DetailCard from "./components/DetailCard";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>

      <Routes>
        <Route path="/car" element={<Card />} />
        <Route path="/car/:carId" element={<DetailCard />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
