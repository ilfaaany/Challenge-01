import { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import Cars from "./Cars";

const Card = () => {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const res = await axios.get("https://rent-cars-api.herokuapp.com/customer/car");
    console.log(res);
    setCars(res.data);
  };
  useEffect(() => {
    getCars();
  }, []);

  return (
    <Grid container MaxWidth="lg" mt={2} px={1} mx="auto">
      {cars ? (
        cars.map((car) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={car.id}>
              <Cars item={car} />
            </Grid>
          );
        })
      ) : (
        <Typography>Empty List</Typography>
      )}
    </Grid>
  );
};

export default Card;
