import { Wrapper } from "./item.style";
import Button from "@mui/material/Button";
import { CartItemType, itemProps } from "../types";

const Item: React.FC<itemProps> = ({ item, handleAddItem }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddItem(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;