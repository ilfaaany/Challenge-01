import React, { useState, useEffect } from "react";
import { PeopleOutline, SettingsOutlined, CalendarTodayOutlined } from "@material-ui/icons";
// import { makeStyles, Button, CardActionArea, Card, CardContent, Box, Typography } from "@material-ui/core";
import { makeStyles, Box, Grid, Typography, Card, CardContent, CardActions, CardActionArea, Button, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { Chip, Stack, Divider, ToggleButtonGroup, ToggleButton } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router";
import HeroDetail from "./HeroDetail";
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import PaymentDetail from "./PaymentDetail";
// import HeroDetail from './HeroDetail';


const useStyles = makeStyles((theme) => ({
  detailCard: {
    background: "white",
    padding: "100px 0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function DetailPesanan() {
  const { carId } = useParams();

  const [item, setItem] = useState();

  const getCarData = async () => {
    const res = await axios.get(`https://6259265392dc8873186a0356.mockapi.io/api/binar/cars${carId}`);

    setItem(res.data);
  };

  useEffect(() => {
    getCarData();
  }, []);
  // const { carId } = useParams();

  // const [item, setItem] = useState();

  // const getCarData = async () => {
  //   const res = await axios.get(`https://rent-cars-api.herokuapp.com/customer/car/${carId}`);

  //   setItem(res.data);
  // };

  // useEffect(() => {
  //   getCarData();
  // }, [item]);

  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <HeroDetail />

      <div className={classes.detailCard}>
        <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "20px" }}>
          <Card item={true} style={{ width: "54%", marginBottom: "10px" }}>
            <Card
              variant="outlined"
              sx={{
                maxWidth: "780px",
                borderRadius: "8px",
              }}
            >
              <Box component="div" sx={{ m: "20px" }}>
                <CardContent
                  sx={{
                    p: "8px",
                    "&:last-child": {
                      pb: "0",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Pilih Bank Transfer</Typography>
                  <Typography variant="body1" sx={{ fontSize: "12px", mt: 2, mb: 3 }}>
                    Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking
                  </Typography>

                  <ToggleButtonGroup orientation="vertical" fullWidth>
                    <Stack direction="column" spacing={2}>
                      <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Chip label="BCA" variant="outlined" sx={{ width: "max-content", borderRadius: "8px" }} />
                        <ToggleButton
                          value="bca"
                          aria-label="list"
                          sx={{
                            color: "#000000",
                            width: "100%",
                            p: 0,
                            border: "none",
                            justifyContent: "flex-start",
                            ml: 2,
                          }}
                        >
                          BCA Transfer
                        </ToggleButton>
                      </Box>

                      <Divider variant="middle" />
                      <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Chip label="BNI" variant="outlined" sx={{ width: "max-content", borderRadius: "8px" }} />
                        <ToggleButton
                          value="bni"
                          aria-label="module"
                          sx={{
                            color: "#000000",
                            width: "100%",
                            p: 0,
                            border: "none",
                            justifyContent: "flex-start",
                            ml: 2,
                          }}
                        >
                          BNI Transfer
                        </ToggleButton>
                      </Box>
                      <Divider variant="middle" />
                      <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Chip label="Mandiri" variant="outlined" sx={{ width: "max-content", borderRadius: "8px" }} />
                        <ToggleButton
                          value="mandiri"
                          aria-label="quilt"
                          sx={{
                            color: "#000000",
                            width: "100%",
                            p: 0,
                            border: "none",
                            justifyContent: "flex-start",
                            ml: 2,
                          }}
                        >
                          Mandiri Transfer
                        </ToggleButton>
                      </Box>
                    </Stack>
                  </ToggleButtonGroup>
                </CardContent>
              </Box>
            </Card>
          </Card>
          <PaymentDetail />
        </div>
      </div>
      <Footer />
    </div>
    // <div>
    //   <HeroDetail />

    //   <div className={classes.detailCard}>
    //     <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "20px" }}>
    //       <Card item={true} style={{ width: "54%", marginBottom: "10px" }}>
    //         <CardActionArea>
    //           <CardContent>
    //             <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
    //               Pilih Bank Transfer
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
    //               Kamu bisa membayar dengan transfer melalui ATM, internet Banking, atau Mobile Banking
    //             </Typography>
    //             {/* pilihan bank */}
    //             <Typography style={{ display: "flex" }}>
    //               <Box component="span" sx={{ p: 2, border: "2px solid black" }}>
    //                 BCA
    //               </Box>
    //               <Typography style={{ marginLeft: "20px", marginTop: "8px", fontSize: "14px" }}>BCA Transfer</Typography>
    //             </Typography>
    //             <Typography style={{ display: "flex" }}>
    //               <Button variant="outlined" style={{ fontSize: "10px", p: 2, border: "2px solid black" }}>
    //                 BNI
    //               </Button>
    //               <Typography style={{ marginLeft: "20px", marginTop: "8px", fontSize: "14px" }}>BNI Transfer</Typography>
    //             </Typography>
    //             <Typography style={{ display: "flex" }}>
    //               <Button variant="outlined" style={{ fontSize: "10px" }}>
    //                 Mandiri
    //               </Button>
    //               <Typography style={{ marginLeft: "20px", marginTop: "8px", fontSize: "14px" }}>Mandiri Transfer</Typography>
    //             </Typography>
    //           </CardContent>
    //         </CardActionArea>
    //       </Card>
    //     </div>
    //   </div>
    // </div>
  );
}
