import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import BarPesanan from "./BarPesanan";
import { Box, Grid, Typography } from "@mui/material";
// import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

function HeroDetail() {
  return (
    <>
      <Grid sx={{ background: "#F1F3FF" }}>
        <Box position="relative">
          <Box height={100} />
        </Box>
        <div className="payment-order d-flex justify-content-between container" style={{ marginBottom: "1.8rem" }}>
          <Link to="/car" className="d-flex" style={{ color: "black", textDecoration: "none" }}>
            {/* <MdArrowBack style={{ fontSize: "1.5rem" }} /> */}
            <h6 className="ms-2 mb-5 align-self-center">Pembayaran</h6>
          </Link>
          <div className="d-flex">
            <div className="circle mb-5 align-self-center">1</div>
            <div className="ms-2 mb-5 align-self-center">Pilih Metode</div>
            <div className="ms-3 mb-5 align-self-center" style={{ background: "#0D28A6", width: "28px", height: "2px" }} />
            <div className="ms-4 mb-5 circle align-self-center">2</div>
            <div className="ms-2 mb-5 align-self-center">Bayar</div>
            <div className="ms-3 mb-5 align-self-center" style={{ background: "#0D28A6", width: "28px", height: "2px" }} />
            <div className="ms-4 mb-5 circle align-self-center">3</div>
            <div className="ms-2 mb-5 align-self-center">Tiket</div>
          </div>
        </div>
      </Grid>
      <BarPesanan />
    </>
    // <div className="Hero">
    //   <div class="main" style={{ background: "#f1f3ff", height: "200px" }}>
    //     <div class=" align-items-center ">
    //       <div style={{ marginLeft: "160px", marginTop: "20px" }}>
    //         <div class=" d-flex align-items-center">
    //           <p style={{ fontWeight: "bold" }}>
    //             <ArrowLeft size={20} /> Pembayaran
    //           </p>

    //           <div class=" d-flex" style={{ marginLeft: "40rem" }}>
    //             <p class="border-dark" style={{ borderRadius: "50%" }}>
    //               1
    //             </p>
    //             <p class="mx-2 ">Pilih Metode</p>
    //             <p>2 </p>
    //             <p class="mx-2">Bayar</p>
    //             <p>3 </p>
    //             <p class="mx-2">Tiket</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <BarPesanan />
    // </div>
  );
}

export default HeroDetail;
