

import { Typography, Box, Table, TableRow, TableBody, TableCell, styled } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const Container = styled(Box)(({theme})=>({
    paddingLeft:'30px',

    [theme.breakpoints.down('sm')]:{
        paddingRight:'10px',
        width:"100%",
        paddingLeft:'5px',
    },
    [theme.breakpoints.up('md')]:{
       // paddingRight:'10px',
        paddingLeft:'100px',
    },
}))




const SmallText = styled(Typography)`
     font-size: 14px;
     vertical-align: baseline;
     & > p {
         font-size: 14px;
         margin-top: 10px;
     }
`;
const StyledBadge = styled(Badge)`
    margin-top: 10px;
    color: #00CC00;
    font-size: 15px;

`;
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }

    /* Responsive styles for tablet devices */
    @media (max-width: 768px) {
        font-size: 14px; 
        & > td {
            font-size: 14px; 
        }
    }

    /* Responsive styles for mobile devices */
    @media (max-width: 480px) {
        font-size: 10px; 
        & > td {
            font-size: 10px;
            margin-top: 5px; 
        }
    }
`;

const ImageStyle = styled(Box)(({theme})=>({
    [theme.breakpoints.down('sm')]:{
        display:'none'
    },
}))


const ProductDetail = ({product}) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));

  return (
    <Container>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
            8 Ratings & 1  Reviews
            <Box component='span'><img src={fassured} style={{width: 77, marginLeft: 20}}/></Box>
        </Typography>
        <Typography>
            <Box component='span' style={{fontSize: 28 }}>₹{product.price.cost}</Box> &nbsp;&nbsp;&nbsp;
            <Box component='span' style={{color:'#878787'}}>₹<strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{color:'#388E3C'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><StyledBadge/>Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C</Typography>
            <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
            <Typography><StyledBadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</Typography>
            <Typography><StyledBadge/>No cost EMI ₹3,000/month. Standard EMI also available</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{color:'#787878'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight: 600 }}>Delivery by {date.toDateString()} |  ₹40</TableCell>
                </ColumnText>  
                <ColumnText>
                    <TableCell style={{color:'#787878'}}>Warranty</TableCell>
                    <TableCell >No Warranty </TableCell>
                </ColumnText>  
                <ColumnText>
                    <TableCell style={{color:'#787878'}}>Seller</TableCell>
                    <TableCell> 
                         <Box component='span' style={{color: '#2874f0' }}>SuperComnet</Box>
                         <Box>GST invoice available</Box>
                         <Box>View more sellers starting from ₹{product.price.cost}</Box>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                       <ImageStyle>
                           <img src={adURL} alt="fkpoints" style={{width: '360px'}}/>
                       </ImageStyle>
                    </TableCell>
                </ColumnText> 
                <ColumnText>
                    <TableCell style={{color:'#787878'}}><Box>Description</Box></TableCell>
                    <TableCell ><Box>{product.description}</Box></TableCell>
                </ColumnText>    
            </TableBody>
        </Table>
    </Container>
  )
}

export default ProductDetail;
