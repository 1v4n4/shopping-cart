import { Wrapper } from "./App.styles";
import { useQuery } from "react-query";
import { LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CartItemType } from "./types";
import { getProducts } from "./api";
import Item from './item/Item';
import {handleAddItem } from './helpers';

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Error</div>;
  return (
    <Wrapper>

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


