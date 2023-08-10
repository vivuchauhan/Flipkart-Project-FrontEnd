
import { useState, useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../redux/actions/productAction';
import { Link } from "react-router-dom";

import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)(({theme}) => ({
  background: '#fff',
  width: '38%',
  borderRedius: '2px',
  marginLeft: '60px',
  display: 'flex',
  [theme.breakpoints.down('sm')]:{
    width: '50%',
    marginLeft: '15px',
  }
}));
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIconWraper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;
const ListWrapper = styled(List)`
  position: absolute;
  background: #FFFFFF;
  color: #000;
  margin-top: 36px;
`;


const Search = () => {

  const [text, setText] = useState('');

  const { products } = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getProducts())
  }, [dispatch])

  const getText = (text) => {
    setText(text);
  }


  return (
    <SearchContainer>
      <InputSearchBase 
           placeholder="Search for products, brands and more"
           onChange={(e)=> getText(e.target.value)}
           value={text}
      />
      <SearchIconWraper>
        <SearchIcon />
      </SearchIconWraper>
      
      {
        text && 
            <ListWrapper> 
              {
                products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                  <ListItem >
                    <Link 
                      to={`/product/${product.id}`} 
                      onClick={()=> setText('')}
                      style={{textDecoration: 'none', color: 'inherit'}}
                      >
                      {product.title.longTitle}
                    </Link>
                  </ListItem>
               ))
              }
            </ListWrapper>
      }
    </SearchContainer>
  );
};

export default Search;
