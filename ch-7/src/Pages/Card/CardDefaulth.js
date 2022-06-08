import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { fetchItems } from "../../Redux/actions/itemActions";
import Cars from "./Cars";
// import Header from '../Layout/Header';
// import Search from "../Layout/Search";
// import Footer from "../Layout/Footer";

const Card = () => {
  const cars = useSelector((state) => state.cars.items);
  console.log(cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  });
  // const btn = useSelector((state) => state.buttonText.buttonText);
  // const cars = useSelector((state) => state.cars.items);
  // console.log(cars);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setButton("Pilih Mobil"));
  //   dispatch(fetchItems());
  // });

  return (
    <>
      {/* <Header />
      <Search /> */}
      <div>
        <Grid container justifyContent="center">
          {/* {cars ? ( */}
          {typeof cars !== "undefined" ? (
            cars.map((item) => {
              return (
                <Grid elevation={0} spacing={1} item key={item.id}>
                  <Cars item={item} />
                </Grid>
              );
            })
          ) : (
            <Typography>Empty List</Typography>
          )}
        </Grid>
      </div>
      {/* <Footer /> */}
    </>
    // <div>
    //   <Grid container justifyContent="center">
    //     {/* {cars ? ( */}
    //     {typeof cars !== "undefined" ? (
    //       cars.map((item) => {
    //         return (
    //           <Grid elevation={0} spacing={1} item key={item.id}>
    //             <Cars item={item} />
    //           </Grid>
    //         );
    //       })
    //     ) : (
    //       <Typography>Empty List</Typography>
    //     )}
    //   </Grid>
    // </div>
  );
};

export default Card;
