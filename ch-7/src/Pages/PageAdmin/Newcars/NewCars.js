import React, { useState } from "react";
import  logoKotak from '../../../Komponen/Img/Rectangle 63.png';
import logoHome from "../../../Komponen/Img/fi_home.png";
import logoTruck from "../../../Komponen/Img/fi_truck.png";
import logoDashboard from '../../../Komponen/Img/Rectangle 62.png';
import menu from '../../../Komponen/Img/fi_menu.png';
import akun from '../../../Komponen/Img/Group 15.png';
import chevron from '../../../Komponen/Img/fi_chevron-down.png';
import chevronRright from '../../../Komponen/Img/Vector.png';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

import './NewCars.css'
export const NewCars = () => {
    var axios = require('axios');
    const [Name, setName] = useState("");
    const [Harga, setHarga] = useState(0);
    const [File, setFile] = useState(null);
    const [FilePrev, setFilePrev] = useState(null)

    const onChangePicture = e => {
        if(e.target.files[0]){
            console.log("my-picture", e.target.files);
            setFile(e.target.files[0]);
            const reader =new FileReader();
            reader.addEventListener("load", () => {
                setFilePrev(reader.result);
            })
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    //API
    const postToApi = (data)=>{
        const FileHandle = File
        var FormData = require('form-data');
        // var fs = require('fs');
        var data = new FormData();
        data.append('name', Name);
        data.append('category', 'small');
        data.append('price', Harga);
        data.append('status', 'false');
        data.append('image', FileHandle);
        
        var config = {
          method: 'post',
          url: 'https://rent-cars-api.herokuapp.com/admin/car',
          // headers: { 
          //   ...data.getHeaders()
          // },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      
  return (
    <div className="main-container">
      <div className="container-dashboard">
        <img alt="" src={logoKotak} className="logo-kotak" />

        <div>
          <a href="dashboard" className="tag">
            {" "}
            <i>
              <img alt="" src={logoHome} className="logo-home" />
            </i>
            Dashboard
          </a>
        </div>

        <div>
          <a href="cars" className="tag">
            {" "}
            <i>
              <img alt="" src={logoTruck} className="logo-truck" />
            </i>
            Cars
          </a>
        </div>
      </div>

      <div className="navbar-content">
        <div className="container-navbar">
          <Navbar expand="lg" className="navbar-custom">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                  <img alt="" src={logoDashboard} />
                  <img alt="" src={menu} className="menu-hamburger" />
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="primary" className="btn-search">
                    Search
                  </Button>
                </Form>

                <img alt="" src={akun} className="logo-akun" />
                <div className="akun-name">Unis Badri</div>
                <img alt="" src={chevron} />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className="container-content">
          <div className="menu">
            <div className="dashboard-up">CARS</div>

            <div className="dashboard-low">
              <div className="dashboard-low-title">List Cars</div>
            </div>
          </div>

          <div className="container-table">
            <div className="main-container-table-cars">
              <div className="content-table">
                <div className="dashboard-table">Cars</div>

                <div className="chevron-right">
                  <img alt="" src={chevronRright} />
                </div>

                <div className="dashboard-table-2">List Cars</div>

                <div className="chevron-right">
                  <img alt="" src={chevronRright} />
                </div>

                <div className="dashboard-table-2">Add New Car</div>
              </div>

              <div className="dashboard-3-new-cars">Add New Car</div>

              <div className="container-new-car">
                <div className="container-input-1">
                  <div className="txt-input">
                    <div className="txt">Nama*</div>
                    <input type="text" placeholder="Placeholder" className="nama-input" onChange={(e) => {setName(e.target.value)}}/>
                  </div>
                </div>
                <div className="container-input-1">
                  <div className="txt-input">
                    <div className="txt">Harga*</div>
                    <input type="text" placeholder="Placeholder"className="nama-input" onChange={(e)=> {setHarga(e.target.value)}}/>
                  </div>
                </div>

                <div className="container-file">
                  <div className="txt">Foto*</div>

                  <div className="container-input-file" >
                    <Form.Group controlId="formFile" src={FilePrev}>
                      <Form.Control type="file" onChange={(e) => (onChangePicture(e))}/>
                    </Form.Group>
                  </div>
                </div>

                <div className="file-max">File size max. 2MB</div>

                <div className="container-input-1">
                  <div className="txt-input">
                    <div className="txt">Start Rent*</div>
                    <div>-</div>
                  </div>
                </div>
                <div className="container-input-1">
                  <div className="txt-input">
                    <div className="txt">Finish*</div>
                    <div>-</div>
                  </div>
                </div>
                <div className="container-input-1">
                  <div className="txt-input">
                    <div className="txt">Created at*</div>
                    <div>-</div>
                  </div>
                </div>
                <div className="container-input-1">
                  <div className="txt-input">
                    <div className="txt">Updated at*</div>
                    <div>-</div>
                  </div>
                </div>

                <div className="btn-newcar">
                  <button className="btn-1">Cancel</button>
                  <button className="btn-2" onClick={() => {postToApi()}}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
