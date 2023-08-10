
import { Link } from "react-router-dom";
import { useState } from "react";

//component
import Search from "./Search";
import CustomButtons from "./CustomButtons";

//mui
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, ListItem, List, styled } from "@mui/material";
import { Menu} from '@mui/icons-material';



const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Link)(({theme}) =>({
  marginLeft: '8%',
  lineHeight: '0',
  textDecoration: 'none',
  color: 'inherit',
  [theme.breakpoints.down('sm')]:{
    marginLeft: '6%',
  }
}));

const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const DrawerStyle =styled(Drawer)(({theme}) => ({
  [theme.breakpoints.down('sm')]:{

  }
}));

const CustomButtonWraper=styled(Box)(({theme}) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]:{
    display: 'none'
  }
}));

const MenuButton = styled(IconButton)(({theme}) => ({
  display: 'none',
  [theme.breakpoints.down('md')]:{
    display: 'block'
  }
}))



const Header = () => {

  const logoURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  
  const [open, setOpen] = useState(false);
  
    const handleOpen = () =>{
      setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
      
    }

    const listStyle = {
      display:"flex",
      padding:"10px",
      margin:'10px 0 0 10px'
    }
    
  return (
    <StyledHeader>
      <Toolbar style={{minHeight: 55}}>
        <MenuButton color="inherit" onClick={handleOpen}>
           <Menu />
        </MenuButton>

        <DrawerStyle open={open} onClose={handleClose}>
          <Box style={{width: '200px'}}>
            <List style={listStyle}>
              <ListItem >
                <CustomButtons />
              </ListItem>
            </List>
          </Box>
        </DrawerStyle>

        <Component to='/'>
             <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <Subheading>
              Explore &nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Subheading>
            <PlusImage src={subURL} alt="sub-logo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonWraper>
          <CustomButtons />
        </CustomButtonWraper>
        
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
