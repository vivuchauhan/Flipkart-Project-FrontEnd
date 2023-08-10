import { useState } from "react";

import { Box, Button, styled } from "@mui/material";
import {ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/actions/cartAction";

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]:{
      padding:'20px 35px'
    },
    [theme.breakpoints.down('lg')]:{
      width:'80%',
    }
}));


const Image = styled('img')(({theme}) =>({
    padding: '15px',
    [theme.breakpoints.down('sm')]:{
      width:'70%'
    },
    [theme.breakpoints.down('lg')]:{
      width:'80%'
    }
}));

const StyledButton = styled(Button)(({theme}) => ({
    width: '48%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')]:{
      width: '46%',
      marginTop:'30px'
    },
    [theme.breakpoints.down('sm')]:{
      width:'48%',
      marginTop:'20px'
    }
  }))


const ActionItem = ({ product }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity] = useState(1);

  const { id } = product;

   const addItemToCart = ()=>{
    dispatch(addToCart(id, quantity));
     navigate('/cart');
   }

  return (
    <LeftContainer>
      <Box style={{ padding:'15px', border:'1px solid #f0f0f0', width: '90%'}}>
         <Image src={product.detailUrl} />
      </Box>
      <StyledButton variant="contained" style={{ marginRight: 10, background: '#ff9f00' }} onClick={()=> addItemToCart()}><Cart/>Add to Cart</StyledButton>
      <StyledButton variant="contained" style={{background: '#fb541b'}} onClick={()=> addItemToCart()}><Flash/>Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem;
