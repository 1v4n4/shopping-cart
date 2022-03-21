import { useState } from "react";
import { Wrapper, StyledButton } from "./App.styles";
import { useQuery } from "react-query";
import { LinearProgress, Badge } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import { CartItemType } from "./types";
import { getProducts } from "./api";
import Item from './item/Item';
import {handleAddItem } from './helpers';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Error</div>;
  return (
    <Wrapper>
      <Drawer anchor='right' open={isOpen} onClose={()=>setIsOpen(false)}>
Cart here
      </Drawer>
      <StyledButton onClick={() => setIsOpen(true)}>
        <Badge color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
    <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item  item={item} handleAddItem={handleAddItem} />
          </Grid>))}
      </Grid>
      </Wrapper>
  );
};

export default App;


