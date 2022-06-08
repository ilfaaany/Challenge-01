import "../Komponen/Css/App.css";
import CardDefaulth from '../Pages/Card/CardDefaulth'
import { Routes, Route } from "react-router";
import LayoutDefaulth from '../Pages/Layout/LayoutDefaulth'
import DetailCard from "../Pages/Detail/DetailCard";
import DetailPesanan from "../Pages/Pesanan/DetailPesanan";
import { BrowserRouter } from "react-router-dom";
import PaymentDetail from "../Pages/Pesanan/PaymentDetail";
import Invoice from "../Pages/Invoces/Invoice";
// import Hero from "./components/Hero";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutDefaulth />}>
              <Route path="/car" element={<CardDefaulth />} />
              <Route path="/car/:carId" element={<DetailCard />} />
              <Route path="/car/detail-pesanan" element={<DetailPesanan />} />
              <Route path="/car/:carId/detail-pesanan" element={<PaymentDetail />} />
              <Route path="/car/invoice" element={<Invoice />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { CardDelate } from '../Pages/PageAdmin/Carddelate/CardDelate'
// import { Cars } from '../Pages/PageAdmin/Cars/Cars'
// import { Dashboard } from '../Pages/PageAdmin/Dashboard/Dashboard'
// import { Login } from '../Pages/PageAdmin/Login/Login'
// import { Regist } from '../Pages/PageAdmin/Login/Regist'
// import { NewCars } from '../Pages/PageAdmin/Newcars/NewCars'


// import LayoutDefaulth from '../Pages/Layout/LayoutDefaulth'
// import CardDefaulth from '../Pages/Card/CardDefaulth'
// import DetailCard from '../Pages/Detail/DetailCard'
// import DetailPesanan from "../Pages/Pesanan/DetailPesanan"


// export const Routers = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Regist />} />
//           <Route path='/Login' element={<Login />} />
//           <Route path='/Dashboard' element={<Dashboard />} />
//           <Route path='cars' element={<Cars />} />
//           <Route path='/delate-cars' element={<CardDelate />} />
//           <Route path='new-cars' element={<NewCars />} />

//           <Route path='/' element={<LayoutDefaulth />} />
//           <Route path='/car' element={<CardDefaulth />} />
//           <Route path='/car:carId' element={<DetailCard />} />
//           <Route path="/car/detail-pesanan" element={<DetailPesanan />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
