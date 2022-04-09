import React, { useState, useEffect } from "react";
import { PeopleOutline, SettingsOutlined, CalendarTodayOutlined } from "@material-ui/icons";
import { makeStyles, Button, CardActionArea, Card, CardContent, CardActions, CardMedia, Typography } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  detailCard: {
    background: "white",
    padding: "100px 0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function DetailCard() {
  const { carId } = useParams();

  const [item, setItem] = useState();

  const getCarData = async () => {
    const res = await axios.get(`https://rent-cars-api.herokuapp.com/customer/car/${carId}`);

    setItem(res.data);
  };

  useEffect(() => {
    getCarData();
  }, [item]);

  const classes = useStyles();
  return (
    <div className={classes.detailCard}>
      <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "20px" }}>
        <Card item={true} style={{ width: "60%", marginBottom: "10px" }}>
          <CardActionArea>
            <CardContent>
              <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                Tentang Paket
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                Include
              </Typography>

              <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                <ul>
                  <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
              </Typography>

              <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                Exclude
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Typography>
              <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                Refund, Reschedule, Overtime
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                </ul>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card style={{ width: "32%", marginBottom: "10px" }}>
          <CardActionArea>
            <CardMedia component="img" image={item?.image} alt="green iguana" style={{ padding: "10px" }} />
            <CardContent>
              <Typography variant="h6" component="div" style={{ paddingBottom: "8px" }}>
                {item?.name}
              </Typography>
              <Typography style={{ display: "flex", color: "grey" }}>
                <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                  <PeopleOutline /> 4 Orang &nbsp;
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                  <SettingsOutlined /> {item?.category} &nbsp;
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                  <CalendarTodayOutlined /> Tahun 2020 &nbsp;
                </Typography>
              </Typography>

              <Typography style={{ display: "flex" }}>
                <Typography style={{ paddingTop: "40px" }}>Total </Typography>
                <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingTop: "40px", marginLeft: "188px" }}>
                  Rp {item?.price.toLocaleString("id-ID")}
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" style={{ background: "#5CB85F", color: "white" }} fullWidth>
              Pilih Mobil
            </Button>
          </CardActions>
        </Card>
      </div>
      <Button variant="contained" style={{ background: "#5CB85F", color: "white" }}>
        Lanjutkan Pembayaran
      </Button>
    </div>
  );
}
