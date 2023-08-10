import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/actions/productAction";
import { Box, Grid, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";
import { Padding } from "@mui/icons-material";

const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`;

const Container = styled(Grid)(({theme}) => ({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]:{
    margin: 0
  },
  [theme.breakpoints.down('lg')]:{
    paddingLeft:'0px'
  }
}))
   
const RightContainer = styled(Grid)(({theme})=>({
    marginTop: '50px',
    [theme.breakpoints.down('sm')]:{
      margin: 0,
      Padding:'0 5px 0 5px'
    },
    [theme.breakpoints.down('lg')]:{
      margin: 0,
      Padding:'20px 0 0 20px',
    }
  }));
  
const LeftContainer = styled(Grid)`
    
`;


const DetailView = () => {

    const dispatch = useDispatch();
    const {id} = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if(product && id !== product.id)
        dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading])

  return (
    <Component>
      {
         product && Object.keys(product).length &&
            <Container container>
                <LeftContainer item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product}/>
                </LeftContainer>
                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                  <ProductDetail product={product}/>
                </RightContainer>
            </Container>
      }
    </Component>
  )
}

export default DetailView;
