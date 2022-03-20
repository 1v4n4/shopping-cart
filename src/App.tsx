import { Wrapper } from "./App.styles";
import { useQuery } from "react-query";
import { LinearProgress } from "@mui/material";
import { CartItemType } from "./types";
import { getProducts } from "./api";


const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Error</div>;
  return (
    <div className="App">
      Hello World
    </div>
  );
};

export default App;


