import { useEffect } from "react";
import { Box, styled } from "@mui/material"; 

//home-components
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { getProducts } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from "react-redux";



const Component = styled(Box)`
  padding:10px;
  background:#f2f2f2;
`;



const Home = () => {

  const { products } = useSelector(state => state.getProducts)
  

  const dispatch = useDispatch();
    
  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch]);


  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title='Deal of the day' timer={true}/>
        <MidSection />
        <Slide products={products} title='Discount for you' timer={false}/>
        <Slide products={products} title='Suggested items' timer={false}/>
        <Slide products={products} title='Top Selectons' timer={false}/>
      </Component>
    </>
  );
};

export default Home;
